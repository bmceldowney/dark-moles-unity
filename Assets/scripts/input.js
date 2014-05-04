#pragma strict

var maxSpeed = 3;

function Start () {
	rigidbody2D.fixedAngle = true;
}

function Update () {
	var from = transform.position;
	var to = Camera.main.ScreenToWorldPoint(Input.mousePosition);

	var angle = Vector2.Angle(Vector2.right, to - from);
	if (angle > 90) {
		transform.localScale.x = -1;
	} else {
		transform.localScale.x = 1;
	}

	if (Input.GetKey ("w")) {
		rigidbody2D.velocity.y = maxSpeed;
	}
	
	if (Input.GetKey ("s")) {
		rigidbody2D.velocity.y = -maxSpeed;
	}
	
	if (Input.GetKey ("a")) {
		rigidbody2D.velocity.x = -maxSpeed;
	}

	if (Input.GetKey ("d")) {
		rigidbody2D.velocity.x = maxSpeed;
	}

		if (rigidbody2D.velocity.x <= maxSpeed || rigidbody2D.velocity.y <= maxSpeed) {
		animation.Play("stand");
	}else {
		animation.Play("walk");
	}
}

function OnGUI () {
	GUI.TextArea(new Rect(10,10,100,30), rigidbody2D.velocity.x.ToString());
}