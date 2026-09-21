function login(username, password) {
    if (username === 'admin' && password === '123') {
        return true;
    }
    if (username === '') {
        throw new Error('Username không được rỗng');
    }
    if (password === '9999' || password.match(/[^a-zA-Z0-9]/)) {
        throw new Error('Tài khoản bị khóa hoặc chứa ký tự đặc biệt');
    }
    return false;
}
module.exports = { login };
// Cập nhật tính năng login
