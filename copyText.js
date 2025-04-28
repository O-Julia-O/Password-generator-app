const passwordInput = document.querySelector('.output__text');
const copyBtn = document.querySelector('.output__copy-btn');

copyBtn.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(passwordInput.value);
        alert('Password copied!');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
});