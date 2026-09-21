const { login } = require('./auth');

test('Regression Test: Mật khẩu sai trả về false', () => {
    expect(login('admin', 'wrongpassword')).toBe(false);
});

test('Regression Test: Username rỗng văng lỗi', () => {
    expect(() => login('', '123')).toThrow('Username không được rỗng');
});

test('Regression Test: Mật khẩu chứa ký tự đặc biệt / Tài khoản khóa văng lỗi', () => {
    expect(() => login('admin', '9999')).toThrow('Tài khoản bị khóa hoặc chứa ký tự đặc biệt');
});
