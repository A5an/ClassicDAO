
ClearLeft();

async function UpdateDetails(){
    await getCLDbal();

    document.getElementById('flexbal').innerText = CLDbal;
}

function DiplayBox(){
    document.getElementById('ConfirmLeft').style.display = "none";
}

function CloseBox(){
    document.getElementById('ConfirmLeft').style.display = "none";
}

function ClearLeft(){
    document.getElementById('ROIleft').style.display = "none";
    document.getElementById('OptionsLeft').style.display = "none";
    document.getElementById('StatsLeft').style.display = "none";
}

function DisplayLeft(){
    document.getElementById('ROIleft').style.display = "initial";
    document.getElementById('OptionsLeft').style.display = "flex";
    document.getElementById('StatsLeft').style.display = "flex";
}

function showOverlay(){
    document.getElementById('overlay').style.display = "block";
    document.body.style.overflow = "hidden";
}

function removeOverlay(){
    document.getElementById('overlay').style.display = "none";
    document.body.style.overflow = "auto";
}