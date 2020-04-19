(function (){
        document.querySelector('input[type="checkbox"]').addEventListener('click', (e)=>{
               document.querySelector('.slider').classList.add('slider-color');
               document.querySelector('#centerButton').classList = 'is-fullwidth button whiteButton';
               
               document.querySelectorAll('.sideButtons').forEach((button)=>{
                   button.classList.remove('whiteButton');
                   button.classList.add('coloredButton');
               })
            
            if (e.target.checked == true)
                {
                    document.querySelectorAll('.monthlyPrices').forEach((value)=>{
                            value.classList.add('is-hidden');
                    });

                    document.querySelectorAll('.annumPrices').forEach((value)=>{
                        value.classList.remove('is-hidden');
                });
                }
                else if (e.target.checked == false)
                {
                    document.querySelectorAll('.monthlyPrices').forEach((value)=>{
                        value.classList.remove('is-hidden');
                });

                document.querySelectorAll('.annumPrices').forEach((value)=>{
                    value.classList.add('is-hidden');
            });
                }
        });
})()