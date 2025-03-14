<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

use App\Models\User;
use Exception;
use Illuminate\Container\Attributes\Auth;
use Illuminate\Support\Facades\Auth as FacadesAuth;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    //
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string',
            'gender' => 'required|string|in:male,female',
            'address' => 'required|string',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => 'user',
            'gender' => $request->gender,
            'address' => $request->address,
        ]);

        return response()->json(['message' => 'User registered successfully'], 201);
    }


    public function login(Request $request)
    {
        try {
            $request->validate([
                'email' => 'required|string|email',
                'password' => 'required|string',
            ]);



            $user = User::where('email', $request->email)->first();
            if (! $user || ! Hash::check($request->password, $user->password)) {
                throw ValidationException::withMessages([
                    'email' => ['The provided credentials are incorrect.'],
                ]);
            }
            $customClaims = [
                'email' => $user->email,
                'name' => $user->name,
                'role' => $user->role,
            ];
            $token = JWTAuth::claims($customClaims)->fromUser($user);
            $customInfor = [
                'email' => $user->email,
                'name' => $user->name,
                'address' => $user->address,
                'gender' => $user->gender,
            ];

            return response()->json(['access_token' => $token, 'token_type' => 'Bearer', 'user' => $customInfor]);
        } catch (Exception $e) {
            error_log($e->getMessage());

            return response()->json(['message' => 'Login fail'], 400);
        }
    }

    public function logout(Request $request)
    {
        try {
            JWTAuth::invalidate(JWTAuth::getToken()); // Xóa token hiện tại
            return response()->json(['message' => 'Đăng xuất thành công'], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Đăng xuất thất bại'], 500);
        }
    }
    public function getAllUser(Request $request)
    {
        return response()->json([
            'data' => User::where('role', 'user')->get()
        ]);
    }


    public function updateUser(Request $request)
    {
        // Validate dữ liệu đầu vào
        $user = User::where('email', $request->email)->first();

        $userToken = JWTAuth::parseToken()->authenticate();
        if ($userToken->email !== $user->email) {
            error_log('loi 1');
            error_log($userToken->email);
            return response()->json(['message' => 'User updated faild'], 401);
        }
        // elseif (!($userToken->role === 'admin' && $user->role === 'user') && $userToken->email !== $user->email) {
        //     error_log('loi 2');
        //     return response()->json(['message' => 'User updated faild'], 401);
        // }

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . ($user ? $user->id : 'null'),
            'address' => 'required|string',
            'gender' => 'required|in:male,female',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $user->update([
            'name' => $request->name,
            'address' => $request->address,
            'gender' => $request->gender,
        ]);

        return response()->json(['message' => 'User updated successfully', 'user' => $user->only(['gender', 'address', 'name', 'email'])], 200);
    }


    public function updateUserByAdmin(Request $request)
    {
        // Validate dữ liệu đầu vào
        $user = User::where('email', $request->email)->first();

        $userToken = JWTAuth::parseToken()->authenticate();
        if ($userToken->role !== 'admin') {
            error_log('loi 3');
            return response()->json(['message' => 'User updated faild'], 401);
        }
        if (!($userToken->role === 'admin' && $user->role === 'user') && $userToken->email !== $user->email) {
            error_log('loi 2');
            return response()->json(['message' => 'User updated faild'], 401);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . ($user ? $user->id : 'null'),
            'address' => 'required|string',
            'gender' => 'required|in:male,female',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $user->update([
            'name' => $request->name,
            'address' => $request->address,
            'gender' => $request->gender,
        ]);

        return response()->json(['message' => 'User updated successfully', 'user' => $user->only(['gender', 'address', 'name', 'email'])], 200);
    }




    public function deleteUser($email)
    {
        $user = User::where('email', $email)->first();

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }
        if ($user->role === 'admin') {
            return response()->json(['message' => 'User not found 1'], 404);
        }

        $user->delete();

        return response()->json(['message' => 'User deleted successfully']);
    }
}
