var body = document.querySelector('body')
var container = document.createElement('div')
container.id="container"
container.className = 'container'

//Body Styling//

body.style.padding = "0"
body.style.margin = "0"
body.style.boxSizing = "border-box"

//Container Style//

container.style.backgroundColor = "#fece0c";
container.style.height="100vh"
container.style.width ="100%"

body.appendChild(container)

//form Container Style //

 var formContainer = document.createElement("div")
 formContainer.id="form-container"
 formContainer.className = "form-container"
 container.appendChild(formContainer)
 formContainer.style.width = "300px"
 formContainer.style.height = "400px"
 formContainer.style.backgroundColor = "#353535"
 formContainer.style.transform = "translate(-50%,-50%)"
 formContainer.style.position = "absolute"
 formContainer.style.top ="50%"
 formContainer.style.left= "50%"
 formContainer.style.borderRadius = "8px"
 formContainer.style.boxShadow = "2px 4px 9px rgba(0,0,0,0.8)"
 formContainer.style.padding = "15px"


 //Creating Heading

 var heading = document.createElement("h3")
 var text = document.createTextNode("contact")
 heading.id="heading"
 heading.setAttribute("className",'heading')
 heading.style.marginTop = "15px"
 heading.style.color = "#f3971b"
 heading.style.fontSize = "30px"
 heading.style.marginBottom = "10px"
 heading.style.textAlign = "center"
 heading.style.fontFamily = "old English Text MT"
 heading.style.borderBottom = "2px solid #f3971b"
 heading.style.paddingBottom = "3px"
 heading.appendChild(text)
 formContainer.appendChild(heading)

 
 //input container//
    var inputContainer = document.createElement("div")
 	inputContainer.className = "input-container"
 	inputContainer.id = 'input-container'
 	inputContainer.style.height = "35px"
 	inputContainer.style.width = "100%"
 	inputContainer.style.borderRadius = "4px"
 	inputContainer.style.overflow = "hidden"
 	inputContainer.style.backgroundColor = "#fff"
 	inputContainer.style.marginTop = "20px"

 	//creating input Field//

 	var input = document.createElement("input")
 	input.type="text"
 	input.style.width ="100%"
 	input.style.height = "100%"
 	input.style.border = "none"
 	input.style.outline = "none"
 	input.style.padding = "0px 15px"
 	input.style.borderRadius = "4px"
 	input.setAttribute("placeholder",'FirstName')
 	inputContainer.appendChild(input)
 	formContainer.appendChild(inputContainer)



 	var inputContainer = document.createElement('div')
 	inputContainer.className = "input-container"
 	inputContainer.style.height = "35px"
 	inputContainer.style.width = "100%"
 	inputContainer.style.backgroundColor = "#fff"
 	inputContainer.style.borderRadius = "4px"
 	inputContainer.style.marginTop = "15px"
 	inputContainer.style.overflow = "hidden"
 	formContainer.appendChild(inputContainer)

    
    var input = document.createElement("input")
    input.type="text"
    input.placeholder = "LastName"
    input.style.width = "100%"
    input.style.height = "100%"
    input.style.padding = "0px 15px"
    input.style.border = "none"
    input.style.outline = "none"
    input.style.borderRadius = "4px"
    inputContainer.appendChild(input)
    
    //inputContainer for Email

    var inputContainer = document.createElement('div')
    inputContainer.style.height = "35px"
    inputContainer.style.width = "100%"
    inputContainer.style.backgroundColor = "#fff"
    inputContainer.style.borderRadius = "4px"
    inputContainer.style.marginTop = "15px"
    inputContainer.style.overflow = "hidden"
    formContainer.appendChild(inputContainer)

    //input field for Email

    var email = document.createElement('input')
    email.setAttribute("tpye","email")
    email.setAttribute("placeholder","Email")
    email.style.width = "100%"
    email.style.height = "100%"
    email.style.padding = "0px 15px"
    email.style.borderRadius = "4px"
    email.style.border = "none"
    email.style.outline = "none"
    inputContainer.appendChild(email)

     var inputContainer = document.createElement('div')
    inputContainer.style.height = "35px"
    inputContainer.style.width = "100%"
    inputContainer.style.backgroundColor = "#fff"
    inputContainer.style.borderRadius = "4px"
    inputContainer.style.marginTop = "15px"
    inputContainer.style.overflow = "hidden"
    formContainer.appendChild(inputContainer)

    //input field for Email

    var password = document.createElement('input')
    password.setAttribute("type","password")
    password.setAttribute("placeholder","Password")
    password.style.width = "100%"
    password.style.height = "100%"
    password.style.borderRadius = "4px"
    password.style.border = "none"
    password.style.padding = "0px 15px"
    password.style.outline = "none"
    inputContainer.appendChild(password)

     var inputContainer = document.createElement('div')
    inputContainer.style.height = "35px"
    inputContainer.style.width = "100%"
    inputContainer.style.backgroundColor = "#fff"
    inputContainer.style.borderRadius = "4px"
    inputContainer.style.marginTop = "15px"
    inputContainer.style.overflow = "hidden"
    formContainer.appendChild(inputContainer)

    //input field for Email

    var phone = document.createElement('input')
    phone.setAttribute("tpye","phone")
    phone.setAttribute("placeholder","Phone")
    phone.style.width = "100%"
    phone.style.height = "100%"
    phone.style.padding = "0px 15px"
    phone.style.borderRadius = "4px"
    phone.style.border = "none"
    phone.style.outline = "none"
    inputContainer.appendChild(phone)
    
    var flexContainer = document.createElement("div")
    flexContainer.style.display = "flex"
    flexContainer.style.height = "15px"
    flexContainer.style.marginTop = "10px"
    flexContainer.style.padding = "5px"
    flexContainer.style.width = "100%"

    //Checkbox Creation
    var check = document.createElement("input")
    check.setAttribute("type",'checkbox')
    check.style.marginRight = "10px"
    flexContainer.appendChild(check)

    //creating span
    var span = document.createElement("span")
    var text = document.createTextNode("I Accept The Terms And Condition")
    span.style.color = "#f3971b"
    span.style.fontFamily = "arial"
    span.style.fontSize = "15px"
    span.appendChild(text)
    flexContainer.appendChild(span)
    formContainer.appendChild(flexContainer)

    //Creaing the button

    var button = document.createElement("button")
    var text = document.createTextNode("Submit")
    button.type = "submit"
    button.style.marginTop = "10px"
    button.style.outline = "none"
    button.style.padding = "7px"
    button.style.borderRadius = "4px"
    button.style.backgroundColor = "#f3971b"
    button.style.color ="#fff"
    button.style.textShadow = "0px 5px 7px rgba(0,0,0,0.8)"
    button.style.fontSize = "17px"
    button.style.border = "none"
    button.style.cursor = "pointer"
    button.style.width ="100%"
    button.appendChild(text)
    formContainer.appendChild(button)
