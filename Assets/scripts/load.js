#pragma strict
import SimpleJSON;

function Start () {
	var json : TextAsset = Resources.Load("levels", TextAsset);
	var stages = JSON.Parse(json.text);
	var firstStage = stages[0].Value;
}

function Update () {

}