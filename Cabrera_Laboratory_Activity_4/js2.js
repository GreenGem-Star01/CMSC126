var incometax;
var tax2;

function button1 (){
	
	var monthlyincome = document.getElementById("monthlyincome").value;
	console.log(`Monthly Income: ${monthlyincome}`);

    function GSISdeduct (){
       var GSIS = (monthlyincome*0.09)*12;
        console.log(`GSIS deduction: ${GSIS}`);
        return GSIS;
    }

    function SSSdeduct () {
       var SSS = (monthlyincome*0.11)*12;
        console.log(`SSS deduction: ${SSS}`);
        return SSS;
    }

    function PAGIBIGdeduct (){
       var PAGIBIG = (monthlyincome*0.01375)*12;
       console.log(`PAG-IBIG deduction: ${PAGIBIG}`);
        return PAGIBIG;
    }

    function Philhealthdeduct(){
       var Philhealth = (monthlyincome*0.035)*12;
        console.log(`PHILHEALTH deduction: ${Philhealth}`);
        return Philhealth;
    }

    function APE (){
        var dependents = document.getElementById("dependents").value;

        if (dependents < 4){
            dependents = dependents*50000;
            console.log(`APE: ${dependents}`);
        }
    
        else {
            dependents = 200000;
            console.log(`APE: ${dependents}`);
        }
        return dependents;
    }

    function Totaldeductions (ans){
        var personalexemption = 50000;
        var totaldeductions;

        if (document.getElementById("yes").checked){
            totaldeductions =  personalexemption + APE () +  GSISdeduct() + Philhealthdeduct () + PAGIBIGdeduct ();
            console.log(`Total Deductions: ${totaldeductions}`);
        }
        else if (document.getElementById("no").checked){
            totaldeductions =  personalexemption + APE () + SSSdeduct() + Philhealthdeduct () + PAGIBIGdeduct ();
            console.log(`Total Deductions: ${totaldeductions}`);
        }
        return totaldeductions;
    }

    function paytax(incometax){
        console.log("tax 2 PART");
         
        var tax2;
    
        if (incometax >= 1 || incometax <=250000){
             tax2 = 0;
             console.log("tax PART 2");
         }
     
         else if (incometax > 250000 || incometax <= 400000) {
             tax2 = (incometax-250000)*0.20;
             console.log("tax PART 2");
         }
     
         else if (incometax > 400000 || incometax <= 800000){
             tax2 = (incometax-400000)*0.25 + 30000;
             console.log("tax PART 3");
         }
     
         else if (incometax > 800000 || incometax <= 2000000){
             tax2 = (incometax-800000)*0.30 + 130000;
             console.log("tax PART 4");
         }
     
         else if (incometax > 2000000 || incometax <= 8000000){
             tax2 = (incometax-2000000)*0.32 + 490000;
             console.log("tax PART 5");
         }
     
         else if (incometax > 8000000){
             tax2 = (incometax-8000000)*0.35 + 2410000;
             console.log("tax PART 6");
         }
         return tax2;
     }

    
    b=Totaldeductions();
    console.log(`Total deductions: ${b}`);

    incometax =  (monthlyincome*13) - Totaldeductions ();
    console.log(`Net Taxable Income: ${incometax}`);

     function paytax(incometax){
        console.log("tax 2 PART");
         
        tax2; 
 
        if (incometax >= 1 && incometax <=250000){
             tax2 = 0;
             console.log(`Payable Tax: 0${tax2}`);
         }
     
         else if (incometax > 250000 && incometax <= 400000) {
             tax2 = (incometax-250000)*0.20;
             console.log(`Payable Tax: ${tax2}`);
         }
     
         else if (incometax > 400000 && incometax <= 800000){
             tax2 = (incometax-400000)*0.25 + 30000;
             console.log(`Payable Tax: ${tax2}`);
         }
     
         else if (incometax > 800000 && incometax <= 2000000){
             tax2 = (incometax-800000)*0.30 + 130000;
             console.log(`Payable Tax: ${tax2}`);
         }
     
         else if (incometax > 2000000 && incometax <= 8000000){
             tax2 = (incometax-2000000)*0.32 + 490000;
             console.log(`Payable Tax: ${tax2}`);
         }
     
         else if (incometax > 8000000){
             tax2 = (incometax-8000000)*0.35 + 2410000;
             console.log(`Payable Tax: ${tax2}`);
         }
         return tax2;
     }

    a=paytax(incometax);
	console.log(`payabletax: ${a}`);

    document.getElementById("payabletax").value = a;
}