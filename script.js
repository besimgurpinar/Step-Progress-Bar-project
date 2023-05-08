
    const steps = document.querySelectorAll('.step');
    const nextButton = document.querySelector('#next');
    let currentStep = 1;

    nextButton.addEventListener('click', () => {
      if (currentStep < steps.length) {
        steps[currentStep - 1].classList.remove('active');
        steps[currentStep].classList.add('active');
        currentStep++;
      }
    });
