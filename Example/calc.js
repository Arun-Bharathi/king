var output = document.getElementById("outputscreen");

        function display(num) {
            output.value += num;
        }

        function del() {
            output.value =output.value.slice(0,-1);
        }

        function clears() {
            output.value =" ";
        }

        function total(){
            output.value=eval(output.value);
            // try{
            //     output.value=eval(output.value);
            // }
            // catch{
            //     alert("something went wrong")
            // }
            // if(output.value=eval(output.value)){
            //     output.value=eval(output.value);
            // }else{
            //     alert("something went wrong")
            // }
            
        }
