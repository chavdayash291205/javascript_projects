
function result() {
    let name = document.getElementById("nameinput").value;
    let age = document.getElementById("ageinput").value;
    let country = document.getElementById("countryinput").value;

    let objarray =
    {
        Name: name,
        Age: age,
        Country: country,

    }
        ;


    document.getElementById("mainresult").innerHTML = "Name: " + objarray.Name + " Age: " + objarray.Age + " Country: " + objarray.Country;
}