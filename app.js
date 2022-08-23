// document.getElementById('calculateTotal').addEventListener('click',function(){
//     const managerCost = document.getElementById('managerSalary');
//     const managerCostString = managerCost.value;
//     const managerCostNumber = parseFloat(managerCostString);
    
//     const coachCost = document.getElementById('coachSalary');
//     const coachCostString = coachCost.value;
//     const coachCostNumber = parseFloat(coachCostString);

//     const finalCost = document.getElementById('totalCost');
//     finalCost.innerText = managerCostNumber + coachCostNumber;
// })

const counter = 0;
const selectBtns = document.getElementsByClassName('select-btn')
for(const selectBtn of selectBtns){
    selectBtn.addEventListener("click",function(e){
        const targetBtn = e.target;
        const parent = targetBtn.parentNode.parentNode;
        const targetEventPlayer = parent.querySelector('h5');
        const targetEventPlayerName = targetEventPlayer.innerText
        if(counter >= 5){
            alert("you can't select more than five player");
        }
        else{
            createNewLi(targetEventPlayerName)
            targetBtn.disabled =  true;
            target.classList.add("bg-danger");
            counter += 1;
        }
    })
}
function createNewLi(text){
    const li = document.createElement("li");
    li.innerText = text;
    const ol = document.getElementById("ol");
    ol.appendChild(li);
}


// ------------- comon function ---------------
function inputValueById(targetedElementId){
    const inputFeildElement = document.getElementById(targetedElementId);
    const inputFeildValue = inputFeildElement.value;
    const inputValue = parseFloat(inputFeildValue);
    return inputValue;
}

const totalPlayer = 5;
const playerExpensiveCalculate = document.getElementById('calculate-player-expenxive-js')
playerExpensiveCalculate.addEventListener('click',function(){
    const perPlayerExpensive = inputValueById('per-player-expensive-js')
    if(perPlayerExpensive >= 0){
        const calculate =  totalPlayer*perPlayerExpensive;
        const totalPlayerExpensive = document.getElementById('total-player-expensive-js');
        totalPlayerExpensive.innerText = calculate;
    }
    else{
        alert('please fill input fiels!!!')
    }
})


const calculateTotal = document.getElementById('calculate-total-js')
calculateTotal.addEventListener('click',function(){
    const totalPlayerExepensess = document.getElementById('total-player-expensive-js').innerText;
    const managerCost = inputValueById('manager-expensive-js')
    const coachCost = inputValueById('coach-expensive-js')
    const totalPlayerCost = parseFloat(totalPlayerExepensess)
    if((managerCost >=0) && (coachCost >=0)){
        const totalCost = totalPlayerCost + managerCost + coachCost;
        document.getElementById('total-expensive-js').innerText = totalCost;
    }
    else{
        alert('please fill input field')
    }
})
