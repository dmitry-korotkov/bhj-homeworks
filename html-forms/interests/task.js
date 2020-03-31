
let interestChecks = document.querySelectorAll(".interest__check");

for (let interestCheck of interestChecks) {
    interestCheck.addEventListener('change', () => {
        let parent = interestCheck.closest('.interest');
        let children = parent.querySelectorAll('.interests_active .interest__check');
        for (let child of children) {
            if (interestCheck.checked) {
                child.checked = true;
            } else {
                child.checked = false;
            }
        }
    });
}