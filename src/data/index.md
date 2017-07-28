---
template: layout.ejs

versions:
  - name:  "1.0"
    value: "1.0"
    source: ""

  - name:  "1.0.4"
    value: "1.0.4"
    source: ""

  - name:  "1.1"
    value: "1.1"
    source: ""

  - name:  "1.1.2"
    value: "1.1.2"
    source: ""

  - name:  "1.1.3"
    value: "1.1.3"
    source: ""

  - name:  "1.1.3"
    value: "1.1.3"
    source: ""

  - name:  "1.2"
    value: "1.2"
    source: ""

  - name:  "1.2.3"
    value: "1.2.3"
    source: ""

  - name:  "1.2.6"
    value: "1.2.6"
    source: "1.2.6"

  - name:  "1.3"
    value: "1.3"
    source: "1.3.2"

  - name:  "1.4"
    value: "1.4"
    source: "1.4.1"

  - name:  "1.4.1"
    value: "1.4.1"
    source: "1.4.1"

  - name:  "1.4.2"
    value: "1.4.2"
    source: "1.4.2"

  - name:  "1.4.3"
    value: "1.4.3"
    source: "1.4.3"

  - name:  "1.4.4"
    value: "1.4.4"
    source: "1.4.3"

  - name:  "1.5"
    value: "1.5"
    source: "1.5"

  - name:  "1.6"
    value: "1.6"
    source: "1.6.2"

  - name:  "1.7"
    value: "1.7"
    source: "1.7.2"

  - name:  "1.8"
    value: "1.8"
    source: "1.8.3"

  - name:  "1.9"
    value: "1.9"
    source: "1.9.1"

  - name:  "1.10 / 2.0"
    value: "1.10"
    source: "2.0.3"

  - name:  "3.0"
    value: "3.0"
    source: "git"

sections:
  - title: Selectors
    slug: selectors
    sections:

      - title: Basics
        items:

          - text: "*"
            title: Selects all elements.
            doc: all-selector
            from: "1.0"

          - text: .class
            title: Selects all elements with the given class.
            doc: class-selector
            from: "1.0"

          - text: element
            title: Selects all elements with the given tag name.
            doc: element-selector
            from: "1.0"

          - text: "#id"
            title: Selects a single element with the given id attribute.
            doc: id-selector
            from: "1.0"

          - text: "selector1, selectorN, ..."
            title: Selects the combined results of all the specified selectors.
            doc: multiple-selector
            from: "1.0"

      - title: Hierarchy
        items:

          - text: "parent &gt; child"
            title: Selects all direct child elements specified by 'child' of elements specified by 'parent'.
            doc: child-selector
            from: "1.0"

          - text: ancestor descendant
            title: Selects all elements that are descendants of a given ancestor.
            doc: descendant-selector
            from: "1.0"

          - text: prev + next
            title: Selects all next elements matching 'next' that are immediately preceded by a sibling 'prev'.
            doc: next-adjacent-Selector
            from: "1.0"

          - text: prev ~ siblings
            title: "Selects all sibling elements that follow after the 'prev' element, have the same parent, and match the filtering 'siblings' selector."
            doc: next-siblings-selector
            from: "1.0"

      - title: Basic Filters
        autosort: true
        items:

          - text: :animated
            title: Select all elements that are in the progress of an animation at the time the selector is run.
            doc: animated-selector
            from: "1.2"

          - text: :eq()
            title: Select the element at index n within the matched set.
            doc: eq-selector
            from: "1.0"

          - text: :even
            title: "Selects even elements, zero-indexed. See also odd."
            doc: even-selector
            from: "1.0"

          - text: :first
            title: Selects the first matched element.
            doc: first-selector
            from: "1.0"

          - text: :gt()
            title: Select all elements at an index greater than index within the matched set.
            doc: gt-selector
            from: "1.0"

          - text: :header
            title: "Selects all elements that are headers, like h1, h2, h3 and so on."
            doc: header-selector
            from: "1.2"

          - text: :lang()
            title: Selects all elements of the specified language.
            doc: lang-selector
            from: "1.9"

          - text: :last
            title: Selects the last matched element.
            doc: last-selector
            from: "1.0"

          - text: :lt()
            title: Select all elements at an index less than index within the matched set.
            doc: lt-selector
            from: "1.0"

          - text: :not()
            title: Selects all elements that do not match the given selector.
            doc: not-selector
            from: "1.0"

          - text: :odd
            title: "Selects odd elements, zero-indexed. See also even."
            doc: odd-selector
            from: "1.0"

          - text: :root
            title: Selects the element that is the root of the document.
            doc: root-selector
            from: "1.9"

          - text: :target
            title: Selects the target element indicated by the fragment identifier of the document's URI.
            doc: target-selector
            from: "1.9"

      - title: Content Filters
        autosort: true
        items:

          - text: :contains()
            title: Select all elements that contain the specified text.
            doc: contains-selector
            from: "1.1.4"

          - text: :empty
            title: Select all elements that have no children (including text nodes).
            doc: empty-selector
            from: "1.0"

          - text: :has()
            title: Selects elements which contain at least one element that matches the specified selector.
            doc: has-selector
            from: "1.1.4"

          - text: :parent
            title: "Select all elements that are the parent of another element, including text nodes."
            doc: parent-selector
            from: "1.0"


      - title: Visibility Filters
        break: true
        autosort: true
        items:

          - text: :hidden
            title: Selects all elements that are hidden.
            doc: hidden-selector
            from: "1.0"

          - text: :visible
            title: Selects all elements that are visible.
            doc: visible-selector
            from: "1.0"

      - title: Attribute
        items:

          - text: '[name|="value"]'
            title: Selects elements that have the specified attribute with a value either equal to a given string or starting with that string followed by a hyphen (-).
            doc: attribute-contains-prefix-selector
            from: "1.0"

          - text: '[name*="value"]'
            title: Selects elements that have the specified attribute with a value containing the a given substring.
            doc: attribute-contains-selector
            from: "1.0"

          - text: '[name~="value"]'
            title: "Selects elements that have the specified attribute with a value containing a given word, delimited by spaces."
            doc: attribute-contains-word-selector
            from: "1.0"

          - text: '[name$="value"]'
            title: Selects elements that have the specified attribute with a value ending exactly with a given string. The comparison is case sensitive.
            doc: attribute-ends-with-selector
            from: "1.0"

          - text: '[name="value"]'
            title: Selects elements that have the specified attribute with a value exactly equal to a certain value.
            doc: attribute-equals-selector
            from: "1.0"

          - text: '[name!="value"]'
            title: "Select elements that either don't have the specified attribute, or do have the specified attribute but not with a certain value."
            doc: attribute-not-equal-selector
            from: "1.0"

          - text: '[name^="value"]'
            title: Selects elements that have the specified attribute with a value beginning exactly with a given string.
            doc: attribute-starts-with-selector
            from: "1.0"

          - text: '[name]'
            title: "Selects elements that have the specified attribute, with any value."
            doc: has-attribute-selector
            from: "1.0"

          - text: '[name="value"][name2="value2"]'
            title: Matches elements that match all of the specified attribute filters.
            doc: multiple-attribute-selector
            from: "1.0"

      - title: Child Filters
        autosort: true
        items:

          - text: :first-child
            title: Selects all elements that are the first child of their parent.
            doc: first-child-selector
            from: "1.1.4"

          - text: :first-of-type
            title: Selects all elements that are the first among siblings of the same element name.
            doc: first-of-type-selector
            from: "1.9"

          - text: :last-child
            title: Selects all elements that are the last child of their parent.
            doc: last-child-selector
            from: "1.1.4"

          - text: :last-of-type
            title: Selects all elements that are the last among siblings of the same element name.
            doc: last-of-type-selector
            from: "1.9"

          - text: :nth-child()
            title: Selects all elements that are the nth-child of their parent.
            doc: nth-child-selector
            from: "1.1.4"

          - text: :nth-last-child()
            title: "Selects all elements that are the nth-child of their parent, counting from the last element to the first."
            doc: nth-last-child-selector
            from: "1.9"

          - text: :nth-last-of-type()
            title: "Selects all elements that are the nth-child of their parent, counting from the last element to the first."
            doc: nth-last-of-type-selector
            from: "1.9"

          - text: :nth-of-type()
            title: Selects all elements that are the nth child of their parent in relation to siblings with the same element name.
            doc: nth-of-type-selector
            from: "1.9"

          - text: :only-child
            title: Selects all elements that are the only child of their parent.
            doc: only-child-selector
            from: "1.1.4"

          - text: :only-of-type()
            title: Selects all elements that have no siblings with the same element name.
            doc: only-of-type-selector
            from: "1.9"

      - title: Forms
        break: true
        autosort: true
        items:

          - text: :button
            title: Selects all button elements and elements of type button.
            doc: button-selector
            from: "1.0"

          - text: :checkbox
            title: Selects all elements of type checkbox.
            doc: checkbox-selector
            from: "1.0"

          - text: :checked
            title: Matches all elements that are checked.
            doc: checked-selector
            from: "1.0"

          - text: :disabled
            title: Selects all elements that are disabled.
            doc: disabled-selector
            from: "1.0"

          - text: :enabled
            title: Selects all elements that are enabled.
            doc: enabled-selector
            from: "1.0"

          - text: :focus
            title: Selects element if it is currently focused.
            doc: focus-selector
            from: "1.6"

          - text: :file
            title: Selects all elements of type file.
            doc: file-selector
            from: "1.0"

          - text: :image
            title: Selects all elements of type image.
            doc: image-selector
            from: "1.0"

          - text: :input
            title: "Selects all input, textarea, select and button elements."
            doc: input-selector
            from: "1.0"

          - text: :password
            title: Selects all elements of type password.
            doc: password-selector
            from: "1.0"

          - text: :radio
            title: Selects all elements of type radio.
            doc: radio-selector
            from: "1.0"

          - text: :reset
            title: Selects all elements of type reset.
            doc: reset-selector
            from: "1.0"

          - text: :selected
            title: Selects all elements that are selected.
            doc: selected-selector
            from: "1.0"

          - text: :submit
            title: Selects all elements of type submit.
            doc: submit-selector
            from: "1.0"

          - text: :text
            title: Selects all elements of type text.
            doc: text-selector
            from: "1.0"

  - title: Attributes / CSS
    slug: attributes
    sections:

      - title: Attributes
        autosort: true
        items:

          - text: .attr()
            title: Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.
            doc: attr
            src: jQuery.fn.attr
            from: "1.0"

          - text: .prop()
            title: Get the value of a property for the first element in the set of matched elements or set one or more properties for every matched element.
            doc: prop
            src: jQuery.fn.prop
            from: "1.6"

          - text: .removeAttr()
            title: Remove an attribute from each element in the set of matched elements.
            doc: removeAttr
            src: jQuery.fn.removeAttr
            from: "1.0"

          - text: .removeProp()
            title: Remove a property for the set of matched elements.
            doc: removeProp
            src: jQuery.fn.removeProp
            from: "1.6"

          - text: .val()
            title: Get the current value of the first element in the set of matched elements or set the value of every matched element.
            doc: val
            src: jQuery.fn.val
            from: "1.0"

      - title: CSS
        autosort: true
        items:

          - text: .addClass()
            title: Adds the specified class(es) to each of the set of matched elements.
            doc: addClass
            src: jQuery.fn.addClass
            from: "1.0"

          - text: .css()
            title: Get the value of a style property for the first element in the set of matched elements or set one or more CSS properties for every matched element.
            doc: css
            src: jQuery.fn.css
            from: "1.0"

          - text: jQuery.cssHooks
            title: "Provides a way to hook directly into jQuery to override how particular CSS properties are retrieved or set. Amongst other uses, cssHooks can be used to create custom, browser-normalized properties for CSS3 features such as box-shadows and gradients."
            doc: jQuery.cssHooks
            src: jQuery.cssHooks
            from: "1.4.3"

          - text: jQuery.cssNumber
            title: "An object containing all CSS properties that may be used without a unit. The .css() method uses this object to see if it may append px to unitless values.."
            doc: jQuery.cssNumber
            src: jQuery.cssNumber
            from: "1.4.3"

          - text:  jQuery.escapeSelector()
            title: "Escapes any character that has a special meaning in a CSS selector."
            doc: jQuery.escapeSelector
            src: jQuery.escapeSelector
            from: "3.0"

          - text: .hasClass()
            title: Determine whether any of the matched elements are assigned the given class.
            doc: hasClass
            src: jQuery.fn.hasClass
            from: "1.2"

          - text: .removeClass()
            title: "Remove a single class, multiple classes, or all classes from each element in the set of matched elements."
            doc: removeClass
            src: jQuery.fn.removeClass
            from: "1.0"

          - text: .toggleClass()
            title: "Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the switch argument."
            doc: toggleClass
            src: jQuery.fn.toggleClass
            from: "1.0"

      - title: Dimensions
        break: true
        autosort: true
        items:

          - text: .height()
            title: Get the current computed height for the first element in the set of matched elements or set the height of every matched element.
            doc: height
            src: jQuery.fn.height
            from: "1.0"

          - text: .innerHeight()
            title: "Get the current computed height for the first element in the set of matched elements, including padding but not border."
            doc: innerHeight
            src: jQuery.fn.innerHeight
            from: "1.2.6"

          - text: .innerWidth()
            title: "Get the current computed width for the first element in the set of matched elements, including padding but not border."
            doc: innerWidth
            src: jQuery.fn.innerWidth
            from: "1.2.6"

          - text: .outerHeight()
            title: "Get the current computed height for the first element in the set of matched elements, including padding, border, and optionally margin."
            doc: outerHeight
            src: jQuery.fn.outerHeight
            from: "1.2.6"

          - text: .outerWidth()
            title: "Get the current computed width for the first element in the set of matched elements, including padding and border."
            doc: outerWidth
            src: jQuery.fn.outerWidth
            from: "1.2.6"

          - text: .width()
            title: Get the current computed width for the first element in the set of matched elements or set the width of every matched element.
            doc: width
            src: jQuery.fn.width
            from: "1.0"

      - title: Offset
        autosort: true
        items:

          - text: .offset()
            title: "Get the current coordinates of the first element, or set the coordinates of every element, in the set of matched elements, relative to the document."
            doc: offset
            src: jQuery.fn.offset
            from: "1.2"

          - text: .offsetParent()
            title: Get the closest ancestor element that is positioned.
            doc: offsetParent
            src: jQuery.fn.offsetParent
            from: "1.2.6"

          - text: .position()
            title: "Get the current coordinates of the first element in the set of matched elements, relative to the offset parent."
            doc: position
            src: jQuery.fn.position
            from: "1.2"

          - text: .scrollLeft()
            title: Get the current horizontal position of the scroll bar for the first element in the set of matched elements or set the horizontal position of the scroll bar for every matched element.
            doc: scrollLeft
            src: jQuery.fn.scrollLeft
            from: "1.2.6"

          - text: .scrollTop()
            title: Get the current vertical position of the scroll bar for the first element in the set of matched elements or set the vertical position of the scroll bar for every matched element.
            doc: scrollTop
            src: jQuery.fn.scrollTop
            from: "1.2.6"

      - title: Data
        autosort: true
        items:

          - text: jQuery.data()
            title: Store arbitrary data associated with the specified element and/or return the value that was set.
            doc: jQuery.data
            src: jQuery.data
            from: "1.2.3"

          - text: .data()
            title: Store arbitrary data associated with the matched elements or return the value at the named data store for the first element in the set of matched elements.
            doc: data
            src: jQuery.fn.data
            from: "1.2.3"

          - text: jQuery.hasData()
            title: Determine whether an element has any jQuery data associated with it.
            doc: jQuery.hasData
            src: jQuery.hasData
            from: "1.5"

          - text: jQuery.removeData()
            title: Remove a previously-stored piece of data.
            doc: jQuery.removeData
            src: jQuery.removeData
            from: "1.2.3"

          - text: .removeData()
            title: Remove a previously-stored piece of data.
            doc: removeData
            src: jQuery.fn.removeData
            from: "1.2.3"

  - title: Manipulation
    slug: manipulation
    sections:

      - title: Copying
        autosort: true
        items:

          - text: .clone()
            title: Create a deep copy of the set of matched elements.
            doc: clone
            src: jQuery.fn.clone
            from: "1.0"

      - title: "DOM Insertion, Around"
        autosort: true
        items:

          - text: .wrap()
            title: Wrap an HTML structure around each element in the set of matched elements.
            doc: wrap
            src: jQuery.fn.wrap
            from: "1.0"

          - text: .wrapAll()
            title: Wrap an HTML structure around all elements in the set of matched elements.
            doc: wrapAll
            src: jQuery.fn.wrapAll
            from: "1.2"

          - text: .wrapInner()
            title: Wrap an HTML structure around the content of each element in the set of matched elements.
            doc: wrapInner
            src: jQuery.fn.wrapInner
            from: "1.2"

      - title: "DOM Insertion, Inside"
        autosort: true
        items:

          - text: .append()
            title: "Insert content, specified by the parameter, to the end of each element in the set of matched elements."
            doc: append
            src: jQuery.fn.append
            from: "1.0"

          - text: .appendTo()
            title: Insert every element in the set of matched elements to the end of the target.
            doc: appendTo
            src: jQuery.fn.appendTo
            from: "1.0"

          - text: .html()
            title: Get the HTML contents of the first element in the set of matched elements or set the HTML contents of every matched element.
            doc: html
            src: jQuery.fn.html
            from: "1.0"

          - text: .prepend()
            title: "Insert content, specified by the parameter, to the beginning of each element in the set of matched elements."
            doc: prepend
            src: jQuery.fn.prepend
            from: "1.0"

          - text: .prependTo()
            title: Insert every element in the set of matched elements to the beginning of the target.
            doc: prependTo
            src: jQuery.fn.prependTo
            from: "1.0"

          - text: .text()
            title: "Get the combined text contents of each element in the set of matched elements, including their descendants, or set the text contents of the matched elements."
            doc: text
            src: jQuery.fn.text
            from: "1.0"

      - title: "DOM Insertion, Outside"
        autosort: true
        items:

          - text: .after()
            title: "Insert content, specified by the parameter, after each element in the set of matched elements."
            doc: after
            src: jQuery.fn.after
            from: "1.0"

          - text: .before()
            title: "Insert content, specified by the parameter, before each element in the set of matched elements."
            doc: before
            src: jQuery.fn.before
            from: "1.0"

          - text: .insertAfter()
            title: Insert every element in the set of matched elements after the target.
            doc: insertAfter
            src: jQuery.fn.insertAfter
            from: "1.0"

          - text: .insertBefore()
            title: Insert every element in the set of matched elements before the target.
            doc: insertBefore
            src: jQuery.fn.insertBefore
            from: "1.0"

      - title: DOM Removal
        autosort: true
        items:

          - text: .detach()
            title: Remove the set of matched elements from the DOM.
            doc: detach
            src: jQuery.fn.detach
            from: "1.4"

          - text: .empty()
            title: Remove all child nodes of the set of matched elements from the DOM.
            doc: empty
            src: jQuery.fn.empty
            from: "1.0"

          - text: .remove()
            title: Remove the set of matched elements from the DOM.
            doc: remove
            src: jQuery.fn.remove
            from: "1.0"

          - text: .unwrap()
            title: "Remove the parents of the set of matched elements from the DOM, leaving the matched elements in their place."
            doc: unwrap
            src: jQuery.fn.unwrap
            from: "1.4"

      - title: DOM Replacement
        autosort: true
        items:

          - text: .replaceAll()
            title: Replace each target element with the set of matched elements.
            doc: replaceAll
            src: jQuery.fn.replaceAll
            from: "1.2"

          - text: .replaceWith()
            title: Replace each element in the set of matched elements with the provided new content.
            doc: replaceWith
            src: jQuery.fn.replaceWith
            from: "1.2"

  - title: Traversing
    slug: traversing
    sections:

      - title: Filtering
        autosort: true
        items:

          - text: .eq()
            title: Reduce the set of matched elements to the one at the specified index.
            doc: eq
            src: jQuery.fn.eq
            from: "1.1.2"

          - text: .filter()
            title: Reduce the set of matched elements to those that match the selector or pass the function's test.
            doc: filter
            src: jQuery.fn.filter
            from: "1.0"

          - text: .first()
            title: Reduce the set of matched elements to the first in the set.
            doc: first
            src: jQuery.fn.first
            from: "1.4"

          - text: .has()
            title: Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element.
            doc: has
            src: jQuery.fn.has
            from: "1.4"

          - text: .is()
            title: Check the current matched set of elements against a selector and return true if at least one of these elements matches the selector.
            doc: is
            src: jQuery.fn.is
            from: "1.0"

          - text: .last()
            title: Reduce the set of matched elements to the final one in the set.
            doc: last
            src: jQuery.fn.last
            from: "1.4"

          - text: .map()
            title: "Pass each element in the current matched set through a function, producing a new jQuery object containing the return values."
            doc: map
            src: jQuery.fn.map
            from: "1.2"

          - text: .not()
            title: Remove elements from the set of matched elements.
            doc: not
            src: jQuery.fn.not
            from: "1.0"

          - text: .slice()
            title: Reduce the set of matched elements to a subset specified by a range of indices.
            doc: slice
            src: jQuery.fn.slice
            from: "1.1.4"

      - title: Miscellaneous Traversing
        autosort: true
        items:

          - text: .add()
            title: Add elements to the set of matched elements.
            doc: add
            src: jQuery.fn.add
            from: "1.0"

          - text: .addBack()
            title: "Add the previous set of elements on the stack to the current set, optionally filtered by a selector."
            doc: addBack
            src: jQuery.fn.addBack
            from: "1.8"

          - text: .andSelf()
            title: Add the previous set of elements on the stack to the current set.
            doc: andSelf
            src: jQuery.fn.andSelf
            from: "1.2"
            deprecated: "1.8"

          - text: .contents()
            title: "Get the children of each element in the set of matched elements, including text and comment nodes."
            doc: contents
            src: jQuery.fn.contents
            from: "1.2"

          - text: .each()
            title: "Iterate over a jQuery object, executing a function for each matched element."
            doc: each
            src: jQuery.fn.each
            from: "1.0"

          - text: .end()
            title: End the most recent filtering operation in the current chain and return the set of matched elements to its previous state.
            doc: end
            src: jQuery.fn.end
            from: "1.0"

      - title: Tree Traversal
        autosort: true
        items:

          - text: .children()
            title: "Get the children of each element in the set of matched elements, optionally filtered by a selector."
            doc: children
            src: jQuery.fn.children
            from: "1.0"

          - text: .closest()
            title: "Get the first ancestor element that matches the selector, beginning at the current element and progressing up through the DOM tree."
            doc: closest
            src: jQuery.fn.closest
            from: "1.3"

          - text: .find()
            title: "Get the descendants of each element in the current set of matched elements, filtered by a selector."
            doc: find
            src: jQuery.fn.find
            from: "1.0"

          - text: .next()
            title: "Get the immediately following sibling of each element in the set of matched elements. If a selector is provided, it retrieves the next sibling only if it matches that selector."
            doc: next
            src: jQuery.fn.next
            from: "1.0"

          - text: .nextAll()
            title: "Get all following siblings of each element in the set of matched elements, optionally filtered by a selector."
            doc: nextAll
            src: jQuery.fn.nextAll
            from: "1.2"

          - text: .nextUntil()
            title: Get all following siblings of each element up to but not including the element matched by the selector.
            doc: nextUntil
            src: jQuery.fn.nextUntil
            from: "1.4"

          - text: .parent()
            title: "Get the parent of each element in the current set of matched elements, optionally filtered by a selector."
            doc: parent
            src: jQuery.fn.parent
            from: "1.0"

          - text: .parents()
            title: "Get the ancestors of each element in the current set of matched elements, optionally filtered by a selector."
            doc: parents
            src: jQuery.fn.parents
            from: "1.0"

          - text: .parentsUntil()
            title: "Get the ancestors of each element in the current set of matched elements, up to but not including the element matched by the selector."
            doc: parentsUntil
            src: jQuery.fn.parentsUntil
            from: "1.4"

          - text: .prev()
            title: "Get the immediately preceding sibling of each element in the set of matched elements, optionally filtered by a selector."
            doc: prev
            src: jQuery.fn.prev
            from: "1.0"

          - text: .prevAll()
            title: "Get all preceding siblings of each element in the set of matched elements, optionally filtered by a selector."
            doc: prevAll
            src: jQuery.fn.prevAll
            from: "1.2"

          - text: .prevUntil()
            title: Get all preceding siblings of each element up to but not including the element matched by the selector.
            doc: prevUntil
            src: jQuery.fn.prevUntil
            from: "1.4"

          - text: .siblings()
            title: "Get the siblings of each element in the set of matched elements, optionally filtered by a selector."
            doc: siblings
            src: jQuery.fn.siblings
            from: "1.0"

  - title: Events
    slug: events
    sections:

      - title: Browser Events
        autosort: true
        items:

          - text: .error()
            title: Bind an event handler to the 'error' JavaScript event.
            doc: error
            src: jQuery.fn.error
            from: "1.0"
            deprecated: "1.8"
            removed: "3.0"

          - text: .resize()
            title: "Bind an event handler to the 'resize' JavaScript event, or trigger that event on an element."
            doc: resize
            src: jQuery.fn.resize
            from: "1.0"

          - text: .scroll()
            title: "Bind an event handler to the 'scroll' JavaScript event, or trigger that event on an element."
            doc: scroll
            src: jQuery.fn.scroll
            from: "1.0"

      - title: Document Loading
        autosort: true
        items:

          - text: .load()
            title: Bind an event handler to the 'load' JavaScript event.
            doc: load-event
            src: jQuery.fn.load
            from: "1.0"
            deprecated: "1.8"
            removed: "3.0"

          - text: .ready()
            title: Specify a function to execute when the DOM is fully loaded.
            doc: ready
            src: jQuery.fn.ready
            from: "1.0"

          - text: .unload()
            title: Bind an event handler to the 'unload' JavaScript event.
            doc: unload
            src: jQuery.fn.unload
            from: "1.0"
            deprecated: "1.8"
            removed: "3.0"

      - title: Event Handler Attachment
        autosort: true
        items:

          - text: .bind()
            title: Attach a handler to an event for the elements.
            doc: bind
            src: jQuery.fn.bind
            from: "1.0"

          - text: .delegate()
            title: "Attach a handler to one or more events for all elements that match the selector, now or in the future, based on a specific set of root elements."
            doc: delegate
            src: jQuery.fn.delegate
            from: "1.4.2"

          - text: .die()
            title: Remove all event handlers previously attached using .live() from the elements.
            doc: die
            src: jQuery.fn.die
            from: "1.3"
            deprecated: "1.7"
            removed: "1.9"

          - text: .live()
            title: "Attach a handler to the event for all elements which match the current selector, now and in the future."
            doc: live
            src: jQuery.fn.live
            from: "1.3"
            deprecated: "1.7"
            removed: "1.9"

          - text: .off()
            title: Remove an event handler.
            doc: off
            src: jQuery.fn.off
            from: "1.7"

          - text: .on()
            title: Attach an event handler function for one or more events to the selected elements.
            doc: on
            src: jQuery.fn.on
            from: "1.7"

          - text: .one()
            title: Attach a handler to an event for the elements. The handler is executed at most once per element.
            doc: one
            src: jQuery.fn.one
            from: "1.1"

          - text: .trigger()
            title: Execute all handlers and behaviors attached to the matched elements for the given event type.
            doc: trigger
            src: jQuery.fn.trigger
            from: "1.0"

          - text: .triggerHandler()
            title: Execute all handlers attached to an element for an event.
            doc: triggerHandler
            src: jQuery.fn.triggerHandler
            from: "1.2"

          - text: .unbind()
            title: Remove a previously-attached event handler from the elements.
            doc: unbind
            src: jQuery.fn.unbind
            from: "1.0"

          - text: .undelegate()
            title: Remove a handler from the event for all elements which match the current selector, now or in the future, based upon a specific set of root elements.
            doc: undelegate
            src: jQuery.fn.undelegate
            from: "1.4.2"

      - title: Form Events
        autosort: true
        items:

          - text: .blur()
            title: "Bind an event handler to the 'blur' JavaScript event, or trigger that event on an element."
            doc: blur
            src: jQuery.fn.blur
            from: "1.0"

          - text: .change()
            title: "Bind an event handler to the 'change' JavaScript event, or trigger that event on an element."
            doc: change
            src: jQuery.fn.change
            from: "1.0"

          - text: .focus()
            title: "Bind an event handler to the 'focus' JavaScript event, or trigger that event on an element."
            doc: focus
            src: jQuery.fn.focus
            from: "1.0"

          - text: .focusin()
            title: "Bind an event handler to the 'focusin' JavaScript event."
            doc: focusin
            src: jQuery.fn.focusin
            from: "1.4"

          - text: .focusout()
            title: "Bind an event handler to the 'focusout' JavaScript event."
            doc: focusout
            src: jQuery.fn.focusout
            from: "1.4"

          - text: .select()
            title: "Bind an event handler to the 'select' JavaScript event, or trigger that event on an element."
            doc: select
            src: jQuery.fn.select
            from: "1.0"

          - text: .submit()
            title: "Bind an event handler to the 'submit' JavaScript event, or trigger that event on an element."
            doc: submit
            src: jQuery.fn.submit
            from: "1.0"

      - title: Keyboard Events
        autosort: true
        items:

          - text: .keydown()
            title: "Bind an event handler to the 'keydown' JavaScript event, or trigger that event on an element."
            doc: keydown
            src: jQuery.fn.keydown
            from: "1.0"

          - text: .keypress()
            title: "Bind an event handler to the 'keypress' JavaScript event, or trigger that event on an element."
            doc: keypress
            src: jQuery.fn.keypress
            from: "1.0"

          - text: .keyup()
            title: "Bind an event handler to the 'keyup' JavaScript event, or trigger that event on an element."
            doc: keyup
            src: jQuery.fn.keyup
            from: "1.0"

      - title: Mouse Events
        break: true
        autosort: true
        items:

          - text: .click()
            title: "Bind an event handler to the 'click' JavaScript event, or trigger that event on an element."
            doc: click
            src: jQuery.fn.click
            from: "1.0"

          - text: .contextMenu()
            title: "Bind an event handler to the 'contextmenu' JavaScript event, or trigger that event on an element."
            doc: contextmenu
            src: jQuery.fn.contextmenu
            from: "1.0"

          - text: .dblclick()
            title: "Bind an event handler to the 'dblclick' JavaScript event, or trigger that event on an element."
            doc: dblclick
            src: jQuery.fn.dblclick
            from: "1.0"

          - text: .hover()
            title: "Bind two handlers to the matched elements, to be executed when the mouse pointer enters and leaves the elements."
            doc: hover
            src: jQuery.fn.hover
            from: "1.0"

          - text: .mousedown()
            title: "Bind an event handler to the 'mousedown' JavaScript event, or trigger that event on an element."
            doc: mousedown
            src: jQuery.fn.mousedown
            from: "1.0"

          - text: .mouseenter()
            title: "Bind an event handler to be fired when the mouse enters an element, or trigger that handler on an element."
            doc: mouseenter
            src: jQuery.fn.mouseenter
            from: "1.0"

          - text: .mouseleave()
            title: "Bind an event handler to be fired when the mouse leaves an element, or trigger that handler on an element."
            doc: mouseleave
            src: jQuery.fn.mouseleave
            from: "1.0"

          - text: .mousemove()
            title: "Bind an event handler to the 'mousemove' JavaScript event, or trigger that event on an element."
            doc: mousemove
            src: jQuery.fn.mousemove
            from: "1.0"

          - text: .mouseout()
            title: "Bind an event handler to the 'mouseout' JavaScript event, or trigger that event on an element."
            doc: mouseout
            src: jQuery.fn.mouseout
            from: "1.0"

          - text: .mouseover()
            title: "Bind an event handler to the 'mouseover' JavaScript event, or trigger that event on an element."
            doc: mouseover
            src: jQuery.fn.mouseover
            from: "1.0"

          - text: .mouseup()
            title: "Bind an event handler to the 'mouseup' JavaScript event, or trigger that event on an element."
            doc: mouseup
            src: jQuery.fn.mouseup
            from: "1.0"

          - text: .toggle()
            title: "Bind two or more handlers to the matched elements, to be executed on alternate clicks."
            doc: toggle-event
            src: jQuery.fn.toggle
            from: "1.0"
            deprecated: "1.8"
            removed: "1.9"

      - title: Event Object
        autosort: true
        items:

          - text: event.currentTarget
            title: The current DOM element within the event bubbling phase.
            doc: event.currentTarget
            from: "1.3"

          - text: event.delegateTarget
            title: The element where the currently-called jQuery event handler was attached.
            doc: event.delegateTarget
            from: "1.7"

          - text: event.data
            title: The optional data passed to jQuery.fn.bind when the current executing handler was bound.
            doc: event.data
            from: "1.1"

          - text: event.isDefaultPrevented()
            title: Returns whether event.preventDefault() was ever called on this event object.
            doc: event.isDefaultPrevented
            from: "1.3"

          - text: event.isImmediatePropagationStopped()
            title: Returns whether event.stopImmediatePropagation() was ever called on this event object.
            doc: event.isImmediatePropagationStopped
            from: "1.3"

          - text: event.isPropagationStopped()
            title: Returns whether event.stopPropagation() was ever called on this event object.
            doc: event.isPropagationStopped
            from: "1.3"

          - text: event.metaKey
            title: Indicates whether the META key was pressed when the event fired.
            doc: event.metaKey
            from: "1.0.4"

          - text: event.namespace
            title: The namespace specified when the event was triggered.
            doc: event.namespace
            from: "1.4.3"

          - text: event.pageX
            title: The mouse position relative to the left edge of the document.
            doc: event.pageX
            from: "1.0.4"

          - text: event.pageY
            title: The mouse position relative to the top edge of the document.
            doc: event.pageY
            from: "1.0.4"

          - text: event.preventDefault()
            title: "If this method is called, the default action of the event will not be triggered."
            doc: event.preventDefault
            from: "1.0"

          - text: event.relatedTarget
            title: "The other DOM element involved in the event, if any."
            doc: event.relatedTarget
            from: "1.1.4"

          - text: event.result
            title: "The last value returned by an event handler that was triggered by this event, unless the value was undefined."
            doc: event.result
            from: "1.3"

          - text: event.stopImmediatePropagation()
            title: Prevents other event handlers from being called.
            doc: event.stopImmediatePropagation
            from: "1.3"

          - text: event.stopPropagation()
            title: "Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event."
            doc: event.stopPropagation
            from: "1.0"

          - text: event.target
            title: The DOM element that initiated the event.
            doc: event.target
            from: "1.0"

          - text: event.timeStamp
            title: "The difference in milliseconds between the time an event is triggered and January 1, 1970."
            doc: event.timeStamp
            from: "1.2.6"

          - text: event.type
            title: Describes the nature of the event.
            doc: event.type
            from: "1.0"

          - text: event.which
            title: "For key or button events, this attribute indicates the specific button or key that was pressed."
            doc: event.which
            from: "1.1.3"

  - title: Effects
    slug: effects
    sections:

      - title: Basics
        autosort: true
        items:

          - text: .hide()
            title: Hide the matched elements.
            doc: hide
            src: jQuery.fn.hide
            from: "1.0"

          - text: .show()
            title: Display the matched elements.
            doc: show
            src: jQuery.fn.show
            from: "1.0"

          - text: .toggle()
            title: Display or hide the matched elements.
            doc: toggle
            src: jQuery.fn.toggle
            from: "1.0"

      - title: Custom
        autosort: true
        items:

          - text: .animate()
            title: Perform a custom animation of a set of CSS properties.
            doc: animate
            src: jQuery.fn.animate
            from: "1.0"

          - text: .clearQueue()
            title: Remove from the queue all items that have not yet been run.
            doc: clearQueue
            src: jQuery.fn.clearQueue
            from: "1.4"

          - text: .delay()
            title: Set a timer to delay execution of subsequent items in the queue.
            doc: delay
            src: jQuery.fn.delay
            from: "1.4"

          - text: .dequeue()
            title: Execute the next function on the queue for the matched elements.
            doc: dequeue
            src: jQuery.fn.dequeue
            from: "1.2"

          - text: jQuery.dequeue()
            title: Execute the next function on the queue for the matched element.
            doc: jQuery.dequeue
            src: jQuery.dequeue
            from: "1.3"

          - text: .finish()
            title: "Stop the currently-running animation, remove all queued animations, and complete all animations for the matched elements."
            doc: finish
            src: jQuery.fn.finish
            from: "1.9"

          - text: jQuery.fx.interval
            title: The rate (in milliseconds) at which animations fire.
            doc: jQuery.fx.interval
            src: jQuery.fx.interval
            from: "1.4.3"

          - text: jQuery.fx.off
            title: Globally disable all animations.
            doc: jQuery.fx.off
            src: jQuery.fx.off
            from: "1.3"

          - text: jQuery.speed
            title: Creates an object containing a set of properties ready to be used in the definition of custom animations.
            doc: jQuery.speed
            src: jQuery.speed
            from: "1.0"

          - text: .queue()
            title: Show or manipulate the queue of functions to be executed on the matched elements.
            doc: queue
            src: jQuery.fn.queue
            from: "1.2"

          - text: jQuery.queue()
            title: Show or manipulate the queue of functions to be executed on the matched element.
            doc: jQuery.queue
            src: jQuery.queue
            from: "1.3"

          - text: .stop()
            title: Stop the currently-running animation on the matched elements.
            doc: stop
            src: jQuery.fn.stop
            from: "1.2"

      - title: Fading
        autosort: true
        items:

          - text: .fadeIn()
            title: Display the matched elements by fading them to opaque.
            doc: fadeIn
            src: jQuery.fn.fadeIn
            from: "1.0"

          - text: .fadeOut()
            title: Hide the matched elements by fading them to transparent.
            doc: fadeOut
            src: jQuery.fn.fadeOut
            from: "1.0"

          - text: .fadeTo()
            title: Adjust the opacity of the matched elements.
            doc: fadeTo
            src: jQuery.fn.fadeTo
            from: "1.0"

          - text: .fadeToggle()
            title: Display or hide the matched elements by animating their opacity.
            doc: fadeToggle
            src: jQuery.fn.fadeToggle
            from: "1.4.4"

      - title: Sliding
        autosort: true
        items:

          - text: .slideDown()
            title: Display the matched elements with a sliding motion.
            doc: slideDown
            src: jQuery.fn.slideDown
            from: "1.0"

          - text: .slideToggle()
            title: Display or hide the matched elements with a sliding motion.
            doc: slideToggle
            src: jQuery.fn.slideToggle
            from: "1.0"

          - text: .slideUp()
            title: Hide the matched elements with a sliding motion.
            doc: slideUp
            src: jQuery.fn.slideUp
            from: "1.0"

  - title: Ajax
    slug: ajax
    sections:

      - title: Global Ajax Event Handlers
        autosort: true
        items:

          - text: .ajaxComplete()
            title: Register a handler to be called when Ajax requests complete. This is an Ajax Event.
            doc: ajaxComplete
            src: jQuery.fn.ajaxComplete
            from: "1.0"

          - text: .ajaxError()
            title: Register a handler to be called when Ajax requests complete with an error. This is an Ajax Event.
            doc: ajaxError
            src: jQuery.fn.ajaxError
            from: "1.0"

          - text: .ajaxSend()
            title: Attach a function to be executed before an Ajax request is sent. This is an Ajax Event.
            doc: ajaxSend
            src: jQuery.fn.ajaxSend
            from: "1.0"

          - text: .ajaxStart()
            title: Register a handler to be called when the first Ajax request begins. This is an Ajax Event.
            doc: ajaxStart
            src: jQuery.fn.ajaxStart
            from: "1.0"

          - text: .ajaxStop()
            title: Register a handler to be called when all Ajax requests have completed. This is an Ajax Event.
            doc: ajaxStop
            src: jQuery.fn.ajaxStop
            from: "1.0"

          - text: .ajaxSuccess()
            title: Attach a function to be executed whenever an Ajax request completes successfully. This is an Ajax Event.
            doc: ajaxSuccess
            src: jQuery.fn.ajaxSuccess
            from: "1.0"

      - title: Helper Functions
        autosort: true
        items:

          - text: jQuery.param()
            title: "Create a serialized representation of an array or object, suitable for use in a URL query string or Ajax request."
            doc: jQuery.param
            src: jQuery.param
            from: "1.2"

          - text: .serialize()
            title: Encode a set of form elements as a string for submission.
            doc: serialize
            src: jQuery.fn.serialize
            from: "1.0"

          - text: .serializeArray()
            title: Encode a set of form elements as an array of names and values.
            doc: serializeArray
            src: jQuery.fn.serializeArray
            from: "1.2"

      - title: Low-Level Interface
        autosort: true
        items:

          - text: jQuery.ajax()
            title: Perform an asynchronous HTTP (Ajax) request.
            doc: jQuery.ajax
            src: jQuery.ajax
            from: "1.0"

          - text: jQuery.prefilter()
            title: Handle custom Ajax options or modify existing options before each request is sent and before they are processed by $.ajax().
            doc: jQuery.ajaxPrefilter
            src: jQuery.ajaxPrefilter
            from: "1.5"

          - text: jQuery.ajaxSetup()
            title: Set default values for future Ajax requests.
            doc: jQuery.ajaxSetup
            src: jQuery.ajaxSetup
            from: "1.1"

          - text: jQuery.ajaxTransport()
            title: Creates an object that handles the actual transmission of Ajax data.
            doc: jQuery.ajaxTransport
            src: jQuery.ajaxTransport
            from: "1.5"

      - title: Shorthand Methods
        autosort: true
        items:

          - text: jQuery.get()
            title: Load data from the server using a HTTP GET request.
            doc: jQuery.get
            src: jQuery.get
            from: "1.0"

          - text: jQuery.getJSON()
            title: Load JSON-encoded data from the server using a GET HTTP request.
            doc: jQuery.getJSON
            src: jQuery.getJSON
            from: "1.0"

          - text: jQuery.getScript()
            title: "Load a JavaScript file from the server using a GET HTTP request, then execute it."
            doc: jQuery.getScript
            src: jQuery.getScript
            from: "1.0"

          - text: jQuery.post()
            title: Load data from the server using a HTTP POST request.
            doc: jQuery.post
            src: jQuery.post
            from: "1.0"

          - text: .load()
            title: Load data from the server and place the returned HTML into the matched element.
            doc: load
            src: jQuery.fn.load
            from: "1.0"

  - title: Core
    slug: core
    sections:

      - title: jQuery Object
        autosort: true
        items:

          - text: jQuery()
            title: Return a collection of matched elements either found in the DOM based on passed argument(s) or created by passing an HTML string.
            doc: jQuery
            src: jQuery
            from: "1.0"

          - text: jQuery.noConflict()
            title: "Relinquish jQuery's control of the $ variable."
            doc: jQuery.noConflict
            src: jQuery.noConflict
            from: "1.0"

          - text: jQuery.sub()
            title: Creates a new copy of jQuery whose properties and methods can be modified without affecting the original jQuery object.
            doc: jQuery.sub
            src: jQuery.sub
            from: "1.5"
            deprecated: "1.7"
            removed: "1.9"

          - text: jQuery.holdReady()
            title: Holds or releases the execution of jQuery's ready event.
            doc: jQuery.holdReady
            src: jQuery.holdReady
            from: "1.6"

          - text: jQuery.when()
            title: "Provides a way to execute callback functions based on one or more objects, usually Deferred objects that represent asynchronous events."
            doc: jQuery.when
            src: jQuery.when
            from: "1.5"

      - title: Deferred Object
        autosort: true
        items:

          - text: jQuery.Deferred()
            title: A factory function that returns a chainable utility object with methods to register multiple callbacks into callback queues, invoke callback queues, and relay the success or failure state of any synchronous or asynchronous function.
            doc: jQuery.Deferred
            from: "1.5"

          - text: deferred.always()
            title: Add handlers to be called when the Deferred object is either resolved or rejected.
            doc: deferred.always
            from: "1.6"

          - text: deferred.done()
            title: Add handlers to be called when the Deferred object is resolved.
            doc: deferred.done
            from: "1.5"

          - text: deferred.fail()
            title: Add handlers to be called when the Deferred object is rejected.
            doc: deferred.fail
            from: "1.5"

          - text: deferred.isRejected()
            title: Determine whether a Deferred object has been rejected.
            doc: deferred.isRejected
            from: "1.5"
            deprecated: "1.7"
            removed: "1.8"

          - text: deferred.isResolved()
            title: Determine whether a Deferred object has been resolved.
            doc: deferred.isResolved
            from: "1.5"
            deprecated: "1.7"
            removed: "1.8"

          - text: deferred.notify()
            title: Call the progressCallbacks on a Deferred object with the given args.
            doc: deferred.notify
            from: "1.7"

          - text: deferred.notifyWith()
            title: Call the progressCallbacks on a Deferred object with the given context and args.
            doc: deferred.notifyWith
            from: "1.7"

          - text: deferred.pipe()
            title: Utility method to filter and/or chain Deferreds.
            doc: deferred.pipe
            from: "1.6"
            deprecated: "1.8"

          - text: deferred.progress()
            title: Add handlers to be called when the Deferred object generates progress notifications.
            doc: deferred.progress
            from: "1.7"

          - text: deferred.promise()
            title: "Return a Deferred's Promise object."
            doc: deferred.promise
            from: "1.5"

          - text: deferred.reject()
            title: Reject a Deferred object and call any failCallbacks with the given args.
            doc: deferred.reject
            from: "1.5"

          - text: deferred.rejectWith()
            title: Reject a Deferred object and call any failCallbacks with the given context and args.
            doc: deferred.rejectWith
            from: "1.5"

          - text: deferred.resolve()
            title: Resolve a Deferred object and call any doneCallbacks with the given args.
            doc: deferred.resolve
            from: "1.5"

          - text: deferred.resolveWith()
            title: Resolve a Deferred object and call any doneCallbacks with the given context and args.
            doc: deferred.resolveWith
            from: "1.5"

          - text: deferred.state()
            title: Determine the current state of a Deferred object.
            doc: deferred.state
            from: "1.7"

          - text: deferred.then()
            title: Add handlers to be called when the Deferred object is resolved or rejected.
            doc: deferred.then
            from: "1.5"

          - text: .promise()
            title: "Return a Promise object to observe when all actions of a certain type bound to the collection, queued or not, have finished."
            doc: promise
            from: "1.6"

      - title: Utilities
        break: true
        autosort: true
        items:

          - text: jQuery.boxModel
            title: "States if the current page, in the user's browser, is being rendered using the W3C CSS Box Model."
            doc: jQuery.boxModel
            src: jQuery.boxModel
            from: "1.0"
            deprecated: "1.3"
            removed: "1.8"

          - text: jQuery.browser
            title: "Contains flags for the useragent, read from navigator.userAgent. We recommend against using this property; please try to use feature detection instead (see jQuery.support). jQuery.browser may be moved to a plugin in a future release of jQuery."
            doc: jQuery.browser
            src: jQuery.browser
            from: "1.0"
            deprecated: "1.3"
            removed: "1.9"

          - text: jQuery.contains()
            title: Check to see if a DOM node is within another DOM node.
            doc: jQuery.contains
            src: jQuery.contains
            from: "1.4"

          - text: jQuery.each()
            title: "A generic iterator function, which can be used to seamlessly iterate over both objects and arrays. Arrays and array-like objects with a length property (such as a function's arguments object) are iterated by numeric index, from 0 to length-1. Other objects are iterated via their named properties."
            doc: jQuery.each
            src: jQuery.each
            from: "1.0"

          - text: jQuery.extend()
            title: Merge the contents of two or more objects together into the first object.
            doc: jQuery.extend
            src: jQuery.extend
            from: "1.0"

          - text: jQuery.globalEval()
            title: Execute some JavaScript code globally.
            doc: jQuery.globalEval
            src: jQuery.globalEval
            from: "1.0.4"

          - text: jQuery.grep()
            title: Finds the elements of an array which satisfy a filter function. The original array is not affected.
            doc: jQuery.grep
            src: jQuery.grep
            from: "1.0"

          - text: jQuery.inArray()
            title: Search for a specified value within an array and return its index (or -1 if not found).
            doc: jQuery.inArray
            src: jQuery.inArray
            from: "1.2"

          - text: jQuery.isArray()
            title: Determine whether the argument is an array.
            doc: jQuery.isArray
            src: jQuery.isArray
            from: "1.3"

          - text: jQuery.isEmptyObject()
            title: Check to see if an object is empty (contains no properties).
            doc: jQuery.isEmptyObject
            src: jQuery.isEmptyObject
            from: "1.4"

          - text: jQuery.isFunction()
            title: Determine if the argument passed is a Javascript function object.
            doc: jQuery.isFunction
            src: jQuery.isFunction
            from: "1.2"

          - text: jQuery.isNumeric()
            title: Determines whether its argument is a number.
            doc: jQuery.isNumeric
            src: jQuery.isNumeric
            from: "1.7"

          - text: jQuery.isPlainObject()
            title: "Check to see if an object is a plain object (created using '{}' or 'new Object')."
            doc: jQuery.isPlainObject
            src: jQuery.isPlainObject
            from: "1.4"

          - text: jQuery.isWindow()
            title: Determine whether the argument is a window.
            doc: jQuery.isWindow
            src: jQuery.isWindow
            from: "1.4.3"

          - text: jQuery.isXMLDoc()
            title: Check to see if a DOM node is within an XML document (or is an XML document).
            doc: jQuery.isXMLDoc
            src: jQuery.isXMLDoc
            from: "1.1.4"

          - text: jQuery.makeArray()
            title: Convert an array-like object into a true JavaScript array.
            doc: jQuery.makeArray
            src: jQuery.makeArray
            from: "1.2"

          - text: jQuery.map()
            title: Translate all items in an array or array-like object to another array of items.
            doc: jQuery.map
            src: jQuery.map
            from: "1.0"

          - text: jQuery.merge()
            title: Merge the contents of two arrays together into the first array. 
            doc: jQuery.merge
            src: jQuery.merge
            from: "1.0"

          - text: jQuery.noop()
            title: An empty function.
            doc: jQuery.noop
            src: jQuery.noop
            from: "1.4"

          - text: jQuery.now()
            title: Return a number representing the current time.
            doc: jQuery.now
            src: jQuery.now
            from: "1.4.3"

          - text: jQuery.parseHTML()
            title: Parses a string into an array of DOM nodes.
            doc: jQuery.parseHTML
            src: jQuery.parseHTML
            from: "1.8"

          - text: jQuery.parseJSON()
            title: Takes a well-formed JSON string and returns the resulting JavaScript object.
            doc: jQuery.parseJSON
            src: jQuery.parseJSON
            from: "1.4.1"
            deprecated: "3.0"

          - text: jQuery.parseXML()
            title: Parses a string into an XML document.
            doc: jQuery.parseXML
            src: jQuery.parseXML
            from: "1.5"

          - text: jQuery.proxy()
            title: Takes a function and returns a new one that will always have a particular context.
            doc: jQuery.proxy
            src: jQuery.proxy
            from: "1.4"

          - text: jQuery.support
            title: A collection of properties that represent the presence of different browser features or bugs.
            doc: jQuery.support
            src: jQuery.support
            from: "1.3"
            deprecated: "1.9"

          - text: jQuery.trim()
            title: Remove the whitespace from the beginning and end of a string.
            doc: jQuery.trim
            src: jQuery.trim
            from: "1.0"

          - text: jQuery.type()
            title: "Determine the internal JavaScript [[Class]] of an object."
            doc: jQuery.type
            src: jQuery.type
            from: "1.4.3"

          - text: jQuery.unique()
            title: "Sorts an array of DOM elements, in place, with the duplicates removed. Note that this only works on arrays of DOM elements, not strings or numbers."
            doc: jQuery.unique
            src: jQuery.unique
            from: "1.1.3"
            deprecated: "3.0"

          - text: jQuery.uniqueSort()
            title: "Sorts an array of DOM elements, in place, with the duplicates removed. Note that this only works on arrays of DOM elements, not strings or numbers."
            doc: jQuery.uniqueSort
            src: jQuery.uniqueSort
            from: "3.0"

      - title: DOM Element Methods
        break: true
        autosort: true
        items:

          - text: .get()
            title: Retrieve the DOM elements matched by the jQuery object.
            doc: get
            src: jQuery.fn.get
            from: "1.0"

          - text: .index()
            title: Search for a given element from among the matched elements.
            doc: index
            src: jQuery.fn.index
            from: "1.0"

          - text: .size()
            title: Return the number of elements in the jQuery object.
            doc: size
            src: jQuery.fn.size
            from: "1.0"
            deprecated: "1.8"

          - text: .toArray()
            title: "Retrieve all the DOM elements contained in the jQuery set, as an array."
            doc: toArray
            src: jQuery.fn.toArray
            from: "1.4"

      - title: Internals
        autosort: true
        items:

          - text: .jquery
            title: A string containing the jQuery version number.
            doc: jquery-2
            src: jQuery.fn.jquery
            from: "1.0"

          - text: .context
            title: The DOM node context originally passed to jQuery(); if none was passed then context will likely be the document.
            doc: context
            src: jQuery.fn.context
            from: "1.3"
            deprecated: "1-10"
            removed: "3.0"

          - text: jQuery.error()
            title: Takes a string and throws an exception containing it.
            doc: jQuery.error
            src: jQuery.error
            from: "1.4.1"

          - text: .length
            title: The number of elements in the jQuery object.
            doc: length
            src: jQuery.fn.length
            from: "1.0"

          - text: .pushStack()
            title: Add a collection of DOM elements onto the jQuery stack.
            doc: pushStack
            src: jQuery.fn.pushStack
            from: "1.0"

          - text: .selector
            title: A selector representing selector originally passed to jQuery().
            doc: selector
            src: jQuery.fn.selector
            from: "1.3"
            deprecated: "1.7"
            removed: "3.0"

      - title: Callbacks Object
        autosort: true
        items:

          - text: jQuery.Callbacks()
            title: A multi-purpose callbacks list object that provides a powerful way to manage callback lists.
            doc: jQuery.Callbacks
            src: jQuery.Callbacks
            from: "1.7"

          - text: callbacks.add()
            title: Add a callback or a collection of callbacks to a callback list.
            doc: callbacks.add
            from: "1.7"

          - text: callbacks.disable()
            title: Disable a callback list from doing anything more.
            doc: callbacks.disable
            from: "1.7"

          - text: callbacks.disabled()
            title: Determine if the callbacks list has been disabled.
            doc: callbacks.disabled
            from: "1.7"

          - text: callbacks.empty()
            title: Remove all of the callbacks from a list.
            doc: callbacks.empty
            from: "1.7"

          - text: callbacks.fire()
            title: Call all of the callbacks with the given arguments.
            doc: callbacks.fire
            from: "1.7"

          - text: callbacks.fired()
            title: Determine if the callbacks have already been called at least once.
            doc: callbacks.fired
            from: "1.7"

          - text: callbacks.fireWith()
            title: Call all callbacks in a list with the given context and arguments.
            doc: callbacks.fireWith
            from: "1.7"

          - text: callbacks.has()
            title: Determine whether a supplied callback is in a list.
            doc: callbacks.has
            from: "1.7"

          - text: callbacks.lock()
            title: Lock a callback list in its current state.
            doc: callbacks.lock
            from: "1.7"

          - text: callbacks.locked()
            title: Determine if the callbacks list has been locked.
            doc: callbacks.locked
            from: "1.7"

          - text: callbacks.remove()
            title: Remove a callback or a collection of callbacks from a callback list.
            doc: callbacks.remove
            from: "1.7"
---