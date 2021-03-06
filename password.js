var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
console.log(` __       __            __                                             
/  |  _  /  |          /  |                                            
$$ | / \ $$ |  ______  $$ |  _______   ______   _____  ____    ______  
$$ |/$  \$$ | /      \ $$ | /       | /      \ /     \/    \  /      \ 
$$ /$$$  $$ |/$$$$$$  |$$ |/$$$$$$$/ /$$$$$$  |$$$$$$ $$$$  |/$$$$$$  |
$$ $$/$$ $$ |$$    $$ |$$ |$$ |      $$ |  $$ |$$ | $$ | $$ |$$    $$ |
$$$$/  $$$$ |$$$$$$$$/ $$ |$$ \_____ $$ \__$$ |$$ | $$ | $$ |$$$$$$$$/ 
$$$/    $$$ |$$       |$$ |$$       |$$    $$/ $$ | $$ | $$ |$$       |
$$/      $$/  $$$$$$$/ $$/  $$$$$$$/  $$$$$$/  $$/  $$/  $$/  $$$$$$$/ 
                                                                       `)
                                                                       
console.log(`   __                        __      __                 
/  |                      /  |    /  |                
_$$ |_     ______         _$$ |_   $$ |____    ______  
/ $$   |   /      \       / $$   |  $$      \  /      \ 
$$$$$$/   /$$$$$$  |      $$$$$$/   $$$$$$$  |/$$$$$$  |
$$ | __ $$ |  $$ |        $$ | __ $$ |  $$ |$$    $$ |
$$ |/  |$$ \__$$ |        $$ |/  |$$ |  $$ |$$$$$$$$/ 
$$  $$/ $$    $$/         $$  $$/ $$ |  $$ |$$       |
 $$$$/   $$$$$$/           $$$$/  $$/   $$/  $$$$$$$/ `)
console.log(`                                                                                __ 
/  |
______    ______    _______  _______  __   __   __   ______    ______    ____$$ |
/      \  /      \  /       |/       |/  | /  | /  | /      \  /      \  /    $$ |
/$$$$$$  | $$$$$$  |/$$$$$$$//$$$$$$$/ $$ | $$ | $$ |/$$$$$$  |/$$$$$$  |/$$$$$$$ |
$$ |  $$ | /    $$ |$$      \$$      \ $$ | $$ | $$ |$$ |  $$ |$$ |  $$/ $$ |  $$ |
$$ |__$$ |/$$$$$$$ | $$$$$$  |$$$$$$  |$$ \_$$ \_$$ |$$ \__$$ |$$ |      $$ \__$$ |
$$    $$/ $$    $$ |/     $$//     $$/ $$   $$   $$/ $$    $$/ $$ |      $$    $$ |
$$$$$$$/   $$$$$$$/ $$$$$$$/ $$$$$$$/   $$$$$/$$$$/   $$$$$$/  $$/        $$$$$$$/ 
$$ |                                                                               
$$ |                                                                               
$$/                                                                                `)
console.log(`                     __  __        __              __                         
/  |/  |      /  |            /  |                        
__     __  ______  $$ |$$/   ____$$ |  ______   _$$ |_     ______    ______  
/  \   /  |/      \ $$ |/  | /    $$ | /      \ / $$   |   /      \  /      \ 
$$  \ /$$/ $$$$$$  |$$ |$$ |/$$$$$$$ | $$$$$$  |$$$$$$/   /$$$$$$  |/$$$$$$  |
$$  /$$/  /    $$ |$$ |$$ |$$ |  $$ | /    $$ |  $$ | __ $$ |  $$ |$$ |  $$/ 
$$ $$/  /$$$$$$$ |$$ |$$ |$$ \__$$ |/$$$$$$$ |  $$ |/  |$$ \__$$ |$$ |      
$$$/   $$    $$ |$$ |$$ |$$    $$ |$$    $$ |  $$  $$/ $$    $$/ $$ |      
$/     $$$$$$$/ $$/ $$/  $$$$$$$/  $$$$$$$/    $$$$/   $$$$$$/  $$/       
                                                          `)
console.log(`   __                          __  __ 
/  |                        /  |/  |
_$$ |_     ______    ______  $$ |$$ |
/ $$   |   /      \  /      \ $$ |$$ |
$$$$$$/   /$$$$$$  |/$$$$$$  |$$ |$$ |
$$ | __ $$ |  $$ |$$ |  $$ |$$ |$$/ 
$$ |/  |$$ \__$$ |$$ \__$$ |$$ | __ 
$$  $$/ $$    $$/ $$    $$/ $$ |/  |
 $$$$/   $$$$$$/   $$$$$$/  $$/ $$/ 
                                    
                                    
                                    `)
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

    reader.question("Please enter a password:", function (password) {
  if(password.length < 10){
      console.log("Attempt failed! Password must be at least 10 characters long!")
  } else if(stringHasNum(password) === false){
      console.log("Attempt failed! Password must contain a number!")
  } else if (format.test(password) === false){
      console.log(`Attempt failed! Password must contain special character: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/</>`)
  }else {
      console.log("Attempt Successful!")
      validInput = true;
  }
  reader.close();
});

//function to check if a string has a number in it
function stringHasNum( inputString ){
    return /\d/.test( inputString );
  }