export const validUserRegistration = (
    fullName,
    email,
    username,
    phone,
    password,
    confirmPassword
) => {
    if (
        !fullName ||
        !email ||
        !username ||
        !phone ||
        !password ||
        !confirmPassword
    ) {
        return "Vui lòng điền đầy đủ!"
    }
    if (password !== confirmPassword) {
        return "Nhập lại mật khẩu không đúng!"
    }
}

export const validUserLogin = (email, password) => {
    if (!email || !password) {
        return "Vui lòng điền đầy đủ!"
    }
}
