import './pictures.scss'

window.onmousedown = e => {
    document.querySelector(".mouse-coords").dataset.mouseDownAt = e.clientX;
}
window.onmousemove = e => {
    if (document.querySelector(".pictures") == null) {
        return;
    }
    if (document.querySelector(".mouse-coords").dataset.mouseDownAt === "0") return;
    const mouseDelta = parseFloat(document.querySelector(".mouse-coords").dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth/2;
    const travelingPercentage = (mouseDelta/maxDelta) * -100;
    const nextPercentage = parseFloat(document.querySelector(".mouse-coords").dataset.percentage) + travelingPercentage;

    const nPercentage = Math.max(Math.min(nextPercentage, 0), -100);
    document.querySelector(".mouse-coords").dataset.p = `${nPercentage}`;
    document.querySelector(".pictures").animate({transform: `translate(${nPercentage}%, -50%)`},
    {duration: 1200, fill: "forwards"});
    document.querySelectorAll(".image").forEach(element => {
        element.animate({objectPosition: `${nPercentage + 100}% 50%`}, 
        {duration: 1200, fill: "forwards"})
    });
}
window.onmouseup = e => {
    document.querySelector(".mouse-coords").dataset.mouseDownAt = "0";
    document.querySelector(".mouse-coords").dataset.percentage = `${document.querySelector(".mouse-coords").dataset.p}`;
}

const Pictures = () => {
    return (
        <div className = "pictures">
            <img className = "image" src="https://images.unsplash.com/photo-1552872673-9b7b99711ebb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" draggable="false" />
            <img className = "image" src="https://images.unsplash.com/photo-1606228281437-dc226988dc3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" draggable="false" />
            <img className = "image" src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" draggable="false" /> 
            <img className = "image" src="https://images.unsplash.com/photo-1606481021733-5e269f7d87f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80" alt="" draggable="false" />
            <img className = "image" src="https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" draggable="false" />
            <img className = "image" src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" draggable="false" />
        </div>
    );
};

export default Pictures