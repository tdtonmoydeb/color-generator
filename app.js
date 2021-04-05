// SELECTING ALL ELEMENTS
        var rootVarriable = document.querySelector(':root');
        var bar = document.querySelector('.bar');
        var colorButtton = document.querySelector('.bar-color');
        var colorCodeDisplay = document.querySelector('.bar-colorCode');
        var copyIcon = document.querySelector('.bar-copyIcon');
        var generatedColorCode = '';

        // CREATING FUNCTIONS
        function loadColorcode() {
            // ALL SYMBOLS FOR HEX COLOR CODE
            const symbols = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
            let code = '';
            // CHOOSING RANDOM CODE FOR 6 TIME
            for (let i = 0; i < 6; i++) {
                // CHOOSING RANDOM CODE FROM SYMBOLS ARRAY
                code += symbols[Math.floor(Math.random() * symbols.length)];
            }
            // STORING CODE IN A GLOBAL VARRIABLE
            generatedColorCode = '#' + code;
        }

        function setColorCode() {
            // REMOVING ANIMATION CLASS
            bar.classList.remove('loadBar');

            // DELYING NEXT TASK FOR FEW MILI SECONDS
            setTimeout(() => {
                // GENERATING NEW COLOR CODE
                loadColorcode();
                // STORING THIS COLOR CODE IN CSS VARRIABLE
                rootVarriable.style.setProperty('--color', generatedColorCode);
                // DISPLAING THE COLOR CODE
                colorCodeDisplay.innerHTML = generatedColorCode;
                // ADDING ANIMATION
                bar.classList.add('loadBar');
            }, 1);
        }

        function copyCode() {
            // VALIDATING THE COPY TASK
            if (!bar.classList.contains('copied')) {
                // CREATING NEW INPUT ELEMENT TO COPY THIS CODE
                const input = document.createElement('input');
                // STORING THE CURRENT COLOR CODE IN INPUT
                input.value = colorCodeDisplay.innerText;
                // ADDING THIS INPUT IN THE BODY
                document.body.appendChild(input);
                // SELECTING THE TEXT FROM INPUT
                input.select();
                // COPYING THE SELECTED TEXT
                document.execCommand("copy", false);
                // REMOVING THE INPUT
                input.remove();

                // SHOWING THE SUCCESS MESSAGE
                bar.classList.add('copied');
                // MAKING INVISIBLE THE SUCCESS MESSAGE AFTER FEW SECONDS
                setTimeout(() => {
                    bar.classList.remove('copied');
                }, 500);
            }else{
                return;
            }
        }
        
        // HANDLING EVENTS
        colorButtton.addEventListener('click', setColorCode);
        copyIcon.addEventListener('click', copyCode);