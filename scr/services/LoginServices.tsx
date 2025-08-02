

const validateLogin = async (email: string, password: string) => {
    return new Promise((resolve, reject) => {
        fetch('https://tu-api.com/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        }).then(response => response.json())
            .then(data => {
                if (data.success) {
                    resolve(data);
                } else {
                    reject(data);
                }
            })
    });

};

module.exports = {
    validateLogin
};