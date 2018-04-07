var canvas=document.querySelector('canvas');

//Setting width and height of the canvas
canvas.width=document.innerWidth;
canvas.height=document.innerHeight;

var c=canvas.getContext('2d')

var mouse={
	x:undefined,
	y:undefined
}

window.addEventListener('mousemove',
	function(event) {
		mouse.x=event.x;
		mouse.y=event.y;
})
var maxRadius=40;
var minRadius=2;

//adding colors
var colorArray =['red','orange','green','blue','yellow'];
var len= colorArray.length;
console.log(len);

var canvas=document.querySelector('canvas');

//Setting width and height of the canvas
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c=canvas.getContext('2d')
function Circle(x,y,dx,dy,radius)
{
	this.x=x;
	this.y=y;
	this.dx=dx;
	this.dy=dy;
	this.radius=radius;

 this.draw =function()
 {
	c.beginPath();
	c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);  // fectching random co-ordinates of circles
	c.strokeStyle="blue";
	c.stroke();
	c.fillStyle=colorArray[Math.floor(Math.random() * len)];
	c.fill();
 }
 this.update=function()
 {
	if(this.x+ this.radius > innerWidth || this.x - this.radius <0)  //checking if the circle doesnt crosses the document boundary
    {
   		this.dx=-this.dx;
    }
    if(this.y+ this.radius > innerHeight || this.y - this.radius <0)
    {
   		this.dy=-this.dy;
    }	
    this.x +=this.dx;
    this.y +=this.dy;

    //interactivity
    if(mouse.x -this.x <50 && mouse.x -this.x > -50 && mouse.y -this.y <50 && mouse.y - this.y >-50)
    {
    	if(this.radius < maxRadius)
    	{
    		this.radius+=8;
    	}
    }
    else if(this.radius > minRadius)
    {
    	this.radius -= 1;
    }
    this.draw();
 }
}

var circleArray =[];
for(var i=0;i<200;i++)
{
	var x =Math.random() * innerWidth; //taking random co-ordinates
	var y=Math.random() * innerHeight;
	var dx= (Math.random()-0.5) *2;
    var dy= (Math.random()-0.5) *2;
    var radius=50;
    circleArray.push(new Circle(x,y,dx,dy,radius)); //passing the argeuements from the object Circle to the cirlceArray
}

function animate()
{
	requestAnimationFrame(animate);
	c.clearRect(0,0,innerWidth,innerHeight);

	for(var i=0;i<circleArray.length;i++)
	{
		circleArray[i].update();
	}

}
animate();


