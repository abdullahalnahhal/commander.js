# Commander.JS
These is a JS Class Enables user to call its methods from DOM elements
Example : 


\<div class = 'commander' data-command='formSubmit' data-form='#form' data-url='http://google.com'>

these Library Main Uses These Helper : https://github.com/abdullahalnahhal/PHPHelper.js

**1**. **Property : element** 

	Element That triggered (fired) the commander method .

**2**. **Property : data** 

    All data set of the element

**3**. **Method : test** [Alerts test to make testing of that commander and make sure that it works well ]

**4**. **Method : constructor** [instantiate an instance variables]

    Arguments : 

- {DOM} **element** : The DOM element that fired the commander .
- {JSON} **data** :  The dataset on the element .

**5**. **Method : validate** [Validates If Data has required fields]

    Arguments : 

- {DOM} **requirements** : The DOM element that fired the commander .
- {JSON} **data** :  The dataset on the element .

**6**. **Method : formValidity** [form forces the HTML inputs to show validations]

	Arguments : 

-	{string} **form** : presents the query string that makes selection .

**7**. **Method : formSubmit** [submits form]

	Arguments : 

- {string} **form** : The querySeletor of the form .
- {string} **url | nul** :  The form action url .

**8**.**Method : submitSelected** [submits the selected DOM elements]

	Arguments : 


- {string} **form** : querySelector of the form element .
- {Object} **selections** : presents object of selections with its name .
- {string} **url** : url that will be added to the form before submit .

**9**.**Method : redirect** [redirects the page to specified url if exists or refresh the page]
	
	Arguments :

- {string} **url|null** : url want to redirect to .

**10**.**Method : modal** [Show and hide for modals]

	Arguments :

- {string} **modal**  : it just takes the queryselector of the modal .
- {Boolean} **show | 1** : if show is 1 then show the modal else dismiss the modal .

**11**.**Method : clearHtml** [sets html content to be empty]

	Arguments :

- {string} **element** : querystring of the element  .

**12**.**Method : toggle** [toggles element's show, props, attribs, ....] 
	
	Arguments :

- {Object[]} **targets**  : array of objects that has element and toggle targets

	Example :

	[{
		on : "query selector", 
		classes : ["className", ...] //array of classes 
		attributes : ["attributeName", ...] // array of attribute names
		props : ["propertyName", ... ] // array of properties
	}]



**13**.**Method : toggleClasses** [toggles element classes if exist remove it or set it if not]
	
	Arguments :

- {string} **element** : queryselector of element wanted to toggle its classes .
- {string[]} **classes** : array of classes wanted to be toggled .

**14**.**Method : toggleAttributes** [toggles element attributes, if value is boolean will reverse it if not boolean remove or add with true]

	Arguments :


- {string} **element** : queryselector of element wanted to toggle its classes .
- {string[]} **attributes** : array of attributes wanted to be toggled .

**15**.**Method : toggleSingleAttribute** [toggles single attribute]

	Arguments :


- {Object} **element** : HTML DOM element .
- {string} **attribute** : attribute name .

**16**.**Method : toggleProps** [toggles element properties]

	Arguments :


- {string} **element** : queryselector of element wanted to toggle its classes .
- {string[]} **props** : array of properties .

**17**.**Method : toggleSingleProperty** [toggles single property]

	Arguments :

- {Object} **element**  : HTML DOM element .
- {string} **property**  : property name .

**18**.**Method : affection** [change affects on Dom elements with several affections]

	Arguments :

- {Object [] } **affections** : array of json affections each json present DOM element .

**19**.**Method : confirm** [launch confirmation message]

	Arguments :

- {string} **message** : message to be shown on prompt .
- {function} **callbackSuccess** : callback after confirmation success .
- {function} **callbackFailure** : callback after confirmation failure .

**20**.**Method : getCheckedElements** [collects checked checkboxes]
	
	Arguments :

- {string} **element** : queryselector to get the elements.

**21**.**Method : setSelected** [set selected values into hidden inputs]

	Example : 

`setSelected ("#element", {"hiddenName":".checkbox", ...})`

	Arguments :

- {string} **element** : queryselector that will append hidden inputs into .
- {Object} **selections** : JSON Object of queryselectors that presents element that gets inputs values .

**22**.**Method : setLocation** [these function sets into an element value]

	Arguments :

- {string} **element** : presents the query selector string [i.e. #id, .class].
- {function} **callback** : is a function or string that presents a function name .
- {string} **success_msg** : fires notification by the message if the location has been added successfully.

**23**.**Method : syncForm** [submits a form using Ajax request]

	Arguments :

- {string} **form** : presents the query string that enables me to select the DOM element .
- {Object} **callback** : can has more than one call back type
