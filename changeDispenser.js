  	class changeDispenser {

  		constructor(fee, pay) {
  			this.fee = fee;
  			this.pay = pay;

  			this.allcurrentLookup = [200,100,50,20,10,5,2,1,0.50,0.20,0.10,0.5];
        this.centsLookUp = {
          0.50: '50c',
          0.20: '20c',
          0.10: '10c',
          0.5: '5c'
        }   

  		}

  		getChange() {
  			if (this.pay > this.fee) 
  				return (this.pay - this.fee).toFixed(2);
  		}

  		isCent(n) {
  			return n % 1 !== 0;
  		}

  		convertToLeastAmount() {

  			let solutions = [];
  			let counter = 0;
  			let change = this.getChange();

  			this.allcurrentLookup.forEach( (item) => {

  				while (change >= item) {

            counter++;

  					let val = `${counter}xR${item}`

  					if (this.isCent(item)) {
  						let cent = this.centsLookUp[item];

  						val = `${counter}x${cent}`;
  					}


  					solutions.push(val);

            if (counter > 1) {
              let count = counter -1;
              solutions.splice(-2,1);
            }


  					change -= item;

  					if (change < 1 && !isNaN(change)) {
  						change = change.toFixed(2);
  					}

  				}

          counter = 0;

  			});

  			return solutions;

  		}

  	}

  	const results = new changeDispenser(12.40, 25.50);

  	console.log('Change: ' + results.getChange());
    console.log('Result: ' + results.convertToLeastAmount());