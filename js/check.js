const callOfCheck = (v, idN, incText) => {
    let value = v;

    let userInp = document.getElementById(idN).value;
    let anser = false
    value.toUpperCase() == userInp.toUpperCase() ? anser = true : anser = false
    if (anser === true) {
        document.getElementById('box' + idN).innerHTML = `
        <p class="check-explanation-correct">Correct</p>
        `
    }
    else {
        document.getElementById('box' + idN).innerHTML = `
        <div class="check-explanation-wrong d-flax-centre">
                        <h4>Wrong</h4>
                        <p class="">${incText}</p>
                    </div>
        `
    }
}
let testOnGoin = false
let totalTestTime = 0;
const startTestBtnCall = () => {


    // if (testOnGoin == true || totalTestTime < 1000) {
    //     // document.getElementById('startTestBtn').value = totalTestTime;
    //     totalTestTime = totalTestTime++;
    //     setTimeout(() => {
    //         console.log('dddddd')
    //         startTestBtnCall()
    //     }, 300);
    //     // if (testOnGoin == true) {
    //     //     startTestBtnCall()
    //     //     console.log('dddddd')
    //     // }
    //     // else {
    //     //     stop
    //     // }

    // }
};


const startTest = (idN, idN2, tStatus) => {
    document.getElementById(idN).style.display = 'none';
    document.getElementById('startTestBtn').value = tStatus;
    document.getElementById(idN2).style.display = 'block';

    testOnGoin = true;
    startTestBtnCall()
};





console.log('value');
