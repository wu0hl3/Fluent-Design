class scrolltrigger {
    constructor(basis, triggerPoint) {
        this.basis = document.querySelector(`${basis}`);
        this.triggerBasis = window.screen.availHeight - this.basis.getBoundingClientRect(DOMRect).top;
        this.triggerPoint = triggerPoint;
    };

    act(trigger) {
        if (this.triggerBasis >= this.triggerPoint) {
            this.basis.classList.add(trigger);
        } else {
            this.basis.classList.remove(trigger);
        };
    }
};



