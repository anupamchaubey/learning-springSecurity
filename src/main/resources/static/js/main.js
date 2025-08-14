
document.addEventListener("DOMContentLoaded", function () {
    const passwordFields = document.querySelectorAll('input[type="password"]');
    passwordFields.forEach(field => {
        const toggleBtn = document.createElement('span');
        toggleBtn.textContent = '👁️';
        toggleBtn.style.cursor = 'pointer';
        toggleBtn.style.marginLeft = '8px';
        toggleBtn.title = 'Show/Hide password';

        toggleBtn.addEventListener('click', () => {
            field.type = field.type === 'password' ? 'text' : 'password';
        });

        field.parentNode.appendChild(toggleBtn);
    });

    const alertMessages = document.querySelectorAll('p[style*="color:red"], p[style*="color:green"]');
    alertMessages.forEach(msg => {
        setTimeout(() => {
            msg.style.display = 'none';
        }, 4000); // Hide after 4 seconds
    });

    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            const inputs = form.querySelectorAll('input[required]');
            let isValid = true;
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#e74c3c';
                } else {
                    input.style.borderColor = '#ccc';
                }
            });

            if (!isValid) {
                e.preventDefault();
                alert("Please fill in all required fields.");
            }
        });
    });
});
