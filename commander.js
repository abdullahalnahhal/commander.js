(function(){
	/**
	 * [Commander these class has predefined methods to be used into html DOM elements]
	 * @tutorial [can't be used unless using https://github.com/abdullahalnahhal/PHPHelper.js]
	 * @tutorial [to use it must use class command ]
	 * @tutorial [to call function use data-command attribute]
	 * @tutorial [to give function arguments values you can give DOM data-argument_name]
	 * @author Abdullah Alnahhal <abdullahalnahhal@gmail.com> <https://github.com/abdullahalnahhal> <https://www.linkedin.com/in/abdullah-al-nahhal-436319a9/>
	 * @class
	 */
	class Commander {
		/**
		 * [element the element that fired the commander]
		 * @var {DOM}
		 */
		element;
		/**
		 * [data the dataset triggered into element]
		 * @var {Object}
		 */
		data;
		/**
		 * [test alert test to test that command is working ]
		 * @return {void}
		 */
		test()
		{
			alert("test");
		}
		/**
		 * [constructor instantiate an instance variables]
		 * @param {DOM} element [the DOM element that fired the commander]
		 * @param {JSON} data [the dataset on the element]
		 * @constructs
		 */
		constructor(element, data)
		{
			this.element = element;
			this.data = data;
		}

		/**
		* [validate Validates If Data has required fields]
		* @param {array} requirements
		* @param {Object} data
		* @return Boolean
		*/
		validate(requirements, data)
		{
			for(let i = 0; i < requirements.length; i++){
				let prop = requirements[i];
				if (!prop in data) {
					return false;
				}
			}
			return true;
		}

		/**
		* [form forces the HTML inputs to show validations]
		* @param {string} form [presents the query string that makes selection]
		* @return {Boolean}
		*/
		formValidity(form)
		{
			let form_object = document.querySelector(form);
			for (let i = 0; i < form_object.length; i++) {
				if (!form_object[i].checkValidity()) {
					let message = form_object[i].validationMessage;
					form_object[i].setCustomValidity(message);
					form_object.checkValidity()
					return false;
				}

			}

			return true;
		}

		/**
		* [formSubmit submits form]
		* @param {string} form [the querySeletor of the form]
		* @param {string} [url=null] [the form action url]
		* @return {void}
		*/
		formSubmit(form, url = null)
		{
			form = document.querySelector(form);

            if (isset(url) && url) {
                form.setAttribute("action", url);
            }
			$(form).submit();
		}

		/**
		* [submitSelected submits the selected DOM elements]
		* @param {string} form [querySelector of the form element]
		* @param {Object} selections [presents object of selections with its name]
		* @param {string} url [url that will be added to the form before submit]
		*/
		submitSelected(form, selections, url = null)
		{
			this.setSelected(form, selection);
			if (isset(url) && url) {
				$(form).attr("action", url);
			}
			this.formSubmit(form);
		}

		/**
		* [redirect redirects the page to specified url if exists or refresh the page]
		* @param {string} [url=null] [ url want to redirect to]
		* @return {void}
		*/
		redirect(url = null)
		{
			if (url) {
				window.location.href = url;
			}else{
				location.reload();
			}

		}

		/**
         * [modal Show and hide for modals]
         * @param {string} modal [it just takes the queryselector of the modal]
         * @param {Boolean} show [if show is 1 then show the modal else dismiss the modal]
         * @return {void}
         */
		modal(modal, show = 1)
        {
        	$(".modal").find(":input").val("");

            if (show){
                $(modal).modal('show');
            }else{
                $(modal).modal('hide');
            }
        }

        /**
         * [clearHtml sets html content to be empty]
         * @param {string} [element] [querystring of the element]
         */
        clearHtml(element)
        {
        	document.querySelector(element).innerHtml = ""
        }

        /**
         * [toggle toggles element's show, props, attribs, ....]
         * @param {Object[]} targets [array of objects that has element and toggle targets]
         * @example [{on:"", classes:[], attributes:[]}, {...}, ...]
         * 
         */
        toggle(targets)
        {
        	if (is_string(targets) && JSONable(targets)) {
        		targets = JSON.parse(targets);
        	}

        	if (!is_object(targets)) {
        		throw new Error('toggle argument 1 must be valid json ... !');
        	}

        	for (target of targets) {
        		if (!isset(target.on) || !is_string(target.on)) {
        			throw new Error('Every target element must has on property ... !');
        		}

        		if (isset(target.classes)) {
        			command.toggleClasses(target.on, target.classes);
        		}

        		if (isset(target.attributes)) {
        			command.toggleAttributes(target.on, target.attributes);
        		}

        		if (isset(target.props)) {
        			command.toggleProps(target.on, target.props);
        		}
        	}
        }

        /**
         * [toggleClasses toggles element classes if exist remove it or set it if not]
         * @param {string} element [queryselector of element wanted to toggle its classes]
         * @param {string[]} classes [array of classes wanted to be toggled]
         */
        toggleClasses(element, classes)
        {
        	let elements = document.querySelectorAll(element);
        	for (let element of elements) {
        		for (let index in classes) {
        			if (!is_string(classes[index]) || JSONable(classes[index])) {
        				throw new Error('All classes must be only string ... !');
        			}

        			if (element.classList.contains(classes[index])) {
        				element.classList.remove(classes[index])
        			}else{
        				element.classList.add(classes[index])
        			}

        		}
        	}
        }

        /**
         * [toggleAttributes toggles element attributes, if value is boolean will reverse it if not boolean remove or add with true]
         * @param {string} element [queryselector of element wanted to toggle its classes]
         * @param {string[]} attributes [array of attributes wanted to be toggled]
         */
        toggleAttributes(element, attributes)
        {
        	let elements = document.querySelectorAll(element);
        	for (let el of elements) {
        		for (let index in attributes) {
        			let attr = attributes[index];
        			if (is_string(attr) || !JSONable(attr)) {
        				newCommand.toggleSingleAttribute(el, attr);
        			}
        		}
        	}
        }

        /**
         * [toggleSingleAttribute toggles single attribute]
         * @param {Object} element [HTML DOM element]
         * @param {string} attribute [attribute name]
         */
        toggleSingleAttribute(element, attribute)
        {
        	if (element.hasAttribute(attribute)) {
        		let value = element.getAttribute(attribute);
        		if (is_bool(value)) {
        			element.setAttribute(attribute, boolReverse(value));
        		}else{
        			element.removeAttribute(attribute);
        		}
        	}else{
        		element.setAttribute(attribute, true);
        	}
        }

        /**
         * [toggleProps toggles element properties]
         * @param {string} element [queryselector of element wanted to toggle its classes]
         * @param {string[]} props [array of properties]
         */
        toggleProps(element, props)
        {
        	let elements = document.querySelectorAll(element);
        	for (let el of elements) {
        		for (let index in props) {
        			let property = props[index];
        			if (is_string(property) || !JSONable(property)) {
        				newCommand.toggleSingleProperty(el, attr);
        			}
        		}
        	}
        }

        /**
         * [toggleSingleProperty toggles single property]
         * @param {Object} element [HTML DOM element]
         * @param {string} property [property name]
         */
        toggleSingleProperty(element, property)
        {
        	if (element[property]) {
        		if (is_bool(element[property])) {
        			element[property] = boolReverse(element[property]);
        		}else{
        			delete(element[property]);
        		}
        	}else{
        		element[property] = true;
        	}
        }

		/**
		 * [affection change affects on Dom elements with several affections]
		 * @param {array} [affections] [array of json affections each json present DOM element]
		 * @example [{'on':'elementQuerySelector', attr:'attribute name', value:'value'}, {...}, ... ]
		 * @return {void}
		 */
		affection(affections)
		{
			if (is_string(affections) && JSONable(affections)) {
				affections = JSON.parse(affections);
			}

			if (!is_object(affections)) {
				throw new Error('affection argument 1 must be valid JSON ... !');
			}

			for (let affection of affections) {
				let element = document.querySelector(affection.on);

				switch (affection.attr) {
					case 'class-add':
						element.classList.add(affection.value);
						break;
					case 'class-remove':
						element.classList.remove(affection.value);
						break;
					default:
						if (element.tagName.toLowerCase() == "select") {
							let options = element.childNodes ;
							for (options in option) {
								if (is_string(affection.value) && JSONable(affection.value)) {
									affection.value = JSON.parse(affection.value );
								}
								if (is_array(affection.value)) {
									if (in_array(option.value, affection.value)) {
										option.selected = true;
									}
								}else{
									if (option.value == affection.value) {
										option.selected = true;
									}
								}
							}
						}else if(element.getAttribute("type").toLowerCase() == "checkbox" || element.getAttribute("type").toLowerCase() == "radio") {
							option.checked = true;
						}
						
						break;
				}
			}
		}

		/**
		 * [confirm launch confirmation message]
		 * @param {string} message [message to be shown on prompt]
		 * @param {function} callbackSuccess [callback after confirmation success]
		 * @param {function} callbackFailure [callback after confirmation failure]
		 */
        confirm(message, callbackSuccess, callbackFailure)
        {
        	let conf = confirm(message);
        	if (conf) {
        		callbackSuccess();
        	}else{
        		callbackFailure()
        	}
        }

        /**
         * [getCheckedElements collects checked checkboxes]
         * @param {string} element [queryselector to get the elements]
         * @return {*[]} [array of values]
         */
        getCheckedElements(element)
        {
        	let selected = [];
        	let elements = document.querySelectorAll(element);
        	for (element of elements) {
        		if (element.checked || element.getAttribute("checked") === true) {
        			selected.push(element.value);
        		}
        	}
        	return selected;
        }

        /**
         * [setSelected set selected values into hidden inputs]
         * @param {string} element [queryselector that will append hidden inputs into]
         * @param {Object} selections [JSON Object of queryselectors that presents element that gets inputs values]
         * @example setSelected ("#element", {"hiddenName":".checkbox", ...})
         */
        setSelected(element, selections)
        {
        	if (!is_string(element) || JSONable(element)) {
        		throw new Error('setSelected Argument 1 must be only valid string to be valid query selector ... !');
        	}

        	for (let index in selections) {
        		let values = [];
        		let selection_elements = selections[index];
        		if (!is_string(selection_elements) || JSONable(selection_elements)) {
        			throw new Error('All Selections must be only string Query Selector ... !');
        		}
        		selection_elements = document.querySelectorAll(selection_elements);
        		for (selection_element of selection_elements) {
        			if (selection_element.getAttribute("type").toLowerCase() == "checkbox") {
        				if (selection_element.checked || selection_element.getAttribute("checked") === true) {
        					values.push(selection_element.value);
        				}
        				continue;
        			}

        			if (selection_element.tagName.toLowerCase() == "select") {
        				if (is_array(selection_element.value)) {
        					array_merge(values, selection_element.value);
        				}
        				values.push(selection_element.value);
        				continue
        			}
        		}
        		values = array_unique(values);
        		let hidden = document.createElement("input").setAttribute("name", index).value = implode(",", values);
        		element.appendChild(hidden);
        	}
        }

        /**
		* [setLocation these function sets into an element value]
		* @param {string} element [presents the query selector string [i.e. #id, .class]]
		* @param {function} callback [is a function or string that presents a function name [i.e. function(){*Do things*}] [i.e. 'functionName']]
		* @param {string} success_msg [fires notification by the message if the location has been added successfully]
		* @throw {Error} exception [fires notification if the browser doesn't support the geolocation]
		*/
		setLocation(element, callback = null, success_msg = null)
		{
			if (navigator.geolocation) {
			    navigator.geolocation.getCurrentPosition(function(position){
			    	document.querySelector(element).value = position.coords.latitude + "," + position.coords.longitude;

			    	if (isset(callback) && isset(callback.success)) {
			    		func_call(callback.success, success_msg);
			    	}
			    });
			  } else {
			  	throw new Error("Geo location is not supported by this browser ... !")
			  }
		}

		/**
		* [syncSubmit submits a form using Ajax request]
		* @param {string} form presents the query string that enables me to select the DOM element
		* @param {Object} callback can has more than one call back type
		* callback types can be such as these {success:... , failure:..., waiting:... }
		*/
		syncForm(form, callback)
		{
			form = document.querySelector(form);
			let action = form.getAttribute("action");
			let method = form.getAttribute("method");
			let form_data = collectFormFields(form);
			request(action, method, {
				success:isset(callback.success)?callback.success:null,
				failure:isset(callback.failure)?callback.failure:null,
				failure:isset(callback.waiting)?callback.waiting:null,
			},formadata);
		}
	}

	function command(element)
	{
		let data = element.data();

		let command = element.data('command');
		delete(data['command']);
		let commander = new Commander(element, data);
		command = command.split(",");

		for (let i = 0; i < command.length; i++) {
			let fun_args = getFunctionParams(commander[command[i]]);
			let fun_name = commander[command[i]];
			let fun_call = "(";
			for (let parameter in fun_args) {

				param = data[fun_args[parameter]];

				if (!isset(param)) {
					param = data[strtolower(fun_args[parameter])];
				}

				if (!param) {
					param = null;
				}

				if (is_object(param)) {
					fun_call = replaceAll(fun_call, /(\r\n|\n|\r)/gm, "");
					object = JSON.stringify(param);
					object = replaceAll(object, "'", "\\'");
					fun_call += "'"+object+"'";
				}else{
					fun_call += "'"+param+"'";
				}
				fun_call = replaceAll(fun_call, /(\r\n|\n|\r)/gm, "");
				fun_call += ",";

			}
			fun_call = rtrim(fun_call, ",", true);
			fun_call += ")";
			eval("commander."+command[i]+fun_call);
		}
	}

	function init()
	{
		$(".new-command").on('change click submit keyup', function(e){
            let type = $(this).prop("tagName").toLowerCase();
            if (isset($(this).attr('type')) && $(this).attr('type').toLowerCase() ==='file') {
                type = 'file';
			}
            let action_type = e.type;

            let textInput_condition = isset(type) && in_array(type, ['input', 'textarea']);
            let input_condition = isset(type) && in_array(type, ['select', 'file', 'input', "div"]);
            let other_condition = isset(type) && !in_array(type, ['input', 'textarea', 'select', 'file']);
            let is_form = (type == "form");
            if (action_type == "submit") {
                e.preventDefault();
            }
            if ((!is_form && action_type == "keyup" && textInput_condition) ||
				(!is_form && action_type == "change" && input_condition) ||
				(!is_form  && action_type == "click" && other_condition) ||
				(is_form && action_type == "submit")
				) {
				command($(this));
			}
			if ($(this).hasClass('command-runtime')) {
				init();
			}
		});
	}
	init();
	// run commander in runtime
	$(".command-rt").each(function(index, el) {
 		init();
	});
	// run commander in runtime
	$(".command-ar").each(function(index, el) {
		$(this).on('change click submit keyup', function(e){
			init();
		});
	});
})();
