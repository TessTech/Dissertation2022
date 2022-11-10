// @ts-nocheck
//(TypeScript 2022)

/****
  Create the elements that will check which layout it is
****/

/* 
  I have sorted multiple layouts into layout one (see report for reason)
  I have created code to show that this solution works on three of these layouts
  Only one can be running at once otherwise they will interfer with the other layout one's code
  There is layout one, layout one point three, and layout one point three
  To view them make sure two of them are commented out
  Layout one is currently running
*/

//Layout One

var LayoutOneFirstRowElelements = document.querySelectorAll(
  '.content-group.no-background .content-group__content.container .row .col-md-6'
);

var LayoutOneSecondRowElelements = document.querySelectorAll(
  '.content-group.no-background .content-group__content.container .row .col-md-4'
);

var LayoutOneThirdRowElelements = document.querySelectorAll(
  '.content-group.with-background .content-group__content.container .row .col-md-3'
);

var layoutOne =
  LayoutOneFirstRowElelements &&
  LayoutOneSecondRowElelements &&
  LayoutOneThirdRowElelements;

if (layoutOne) {
  LayoutOneFirstRowElelements.forEach((x) => x.classList.add('rowOne'));
  //(Phhu 2020) Alterations of the code refernced on the above line are used throughout this file
  LayoutOneSecondRowElelements.forEach((x) => x.classList.add('rowTwo'));
  LayoutOneThirdRowElelements.forEach((x) => x.classList.add('rowThree'));
}

/*Comment back in layout 1.2 to view it. Remember to comment out the other two layout one layouts

//layout 1.2
var LayoutOnePointTwoFirstRowElelementOne = document.querySelectorAll(
  '.content .container .row #find_the_right_accommodation_2540935'
);

var LayoutOnePointTwoFirstRowElelementTwo = document.querySelectorAll(
  '.content .container .row #take_a_tour_of_our_residences_1496945'
);

var LayoutOnePointTwoSecondRowElelements = document.querySelectorAll(
  '.content .container .row .span3.col-md-3.squiz-bodycopy'
);

var LayoutOnePointTwoThirdRowElelements = document.querySelectorAll(
  '.content .container .row .span3.col-md-6.squiz-bodycopy'
);

var layoutOnePointTwo =
  LayoutOnePointTwoFirstRowElelementOne &&
  LayoutOnePointTwoFirstRowElelementTwo &&
  LayoutOnePointTwoSecondRowElelements &&
  LayoutOnePointTwoThirdRowElelements;

if (layoutOnePointTwo) {
  LayoutOnePointTwoFirstRowElelementTwo.forEach((x) =>
    x.classList.add('rowOneElementTwo')
  );

  LayoutOnePointTwoSecondRowElelements.forEach((x) =>
    x.classList.add('rowTwo')
  );
  LayoutOnePointTwoThirdRowElelements.forEach((x) =>
    x.classList.add('rowThree')
  );

  LayoutOnePointTwoFirstRowElelementOne.forEach((x) =>
    x.classList.add('rowOneElementOne')
  );
}

End of layout 1.2*/

/*Comment back in layout 1.3 to view it. Remember to comment out the other two layout one layouts
//layout 1.3

var LayoutOnePointThreeNavBar = document.querySelector(
  '#content .container .row .col-md-12 .nav-section .row .col-md-12 .navbar'
);

var LayoutOnePointThreeFirstRowElelementOne = document.querySelectorAll(
  '#content .container .row #content_container_28726_28726'
);

var LayoutOnePointThreeFirstRowElelementsTwoThree = document.querySelectorAll(
  '#content .container .row .col-md-3'
);

var LayoutOnePointThreeSecondBlock = document.querySelectorAll(
  '#content .container .row .span4.col-md-4'
);

var layoutOnePointThree =
  LayoutOnePointThreeNavBar &&
  LayoutOnePointThreeFirstRowElelementOne &&
  LayoutOnePointThreeFirstRowElelementsTwoThree &&
  LayoutOnePointThreeSecondBlock;

if (layoutOnePointThree) {

  LayoutOnePointThreeNavBar.id = 'layoutOnePointThreeNavBar';

  LayoutOnePointThreeFirstRowElelementOne.forEach((x) =>
    x.classList.add('rowOneElementOne')
  );

  LayoutOnePointThreeFirstRowElelementsTwoThree.forEach((x) =>
    x.classList.add('rowOneElementsTwoThree')
  );

  LayoutOnePointThreeSecondBlock.forEach((x) => x.classList.add('secondBlock'));

}

end of layout 1.3*/

//Layout two point one (md)

var LayoutTwoLeftMdElelement = document.querySelector(
  '.content .container .row .col-md-12 .row .col-md-4.d-none.d-md-block'
);

var LayoutTwoRightMdElelement = document.querySelector(
  '.content .container .row .col-md-12 .row .col-md-8'
);

var LayoutTwoFilterButtonMdElement = document.querySelector(
  '.content .container .row .col-md-12 .row .col-md-8 .btn.btn-lg.d-md-none'
);

var LayoutTwoSearchButtonMdElement = document.querySelector(
  '.content .container .row .col-md-12 .row .col-md-8 .form .form-row .col-auto.my-1.d-none.d-md-block'
);

var LayoutTwoSearchIconMdElement = document.querySelector(
  '.content .container .row .col-md-12 .row .col-md-8 .form .form-row .col-sm-12.col-md-8.my-1 .btn.btn-link.d-md-none.position-absolute'
);

var layoutTwoMd =
  LayoutTwoLeftMdElelement &&
  LayoutTwoRightMdElelement &&
  LayoutTwoFilterButtonMdElement &&
  LayoutTwoSearchButtonMdElement &&
  LayoutTwoSearchIconMdElement;

if (layoutTwoMd) {
  LayoutTwoLeftMdElelement.id = 'leftSection';

  LayoutTwoRightMdElelement.id = 'rightSection';

  LayoutTwoFilterButtonMdElement.id = 'filterButton';

  LayoutTwoSearchButtonMdElement.id = 'searchButton';

  LayoutTwoSearchIconMdElement.id = 'searchIcon';
}

//Layout two point two (lg)
var LayoutTwoLeftLgElelement = document.querySelector(
  '.content .container .row .col-md-12 .row .col-lg-4.d-none.d-lg-block'
);

var LayoutTwoRightLgElelement = document.querySelector(
  '.content .container .row .col-md-12 .row .col-lg-8'
);

var LayoutTwoFilterButtonLgElement = document.querySelector(
  '.content .container .row .col-md-12 .row .col-lg-8 .btn.btn-lg.btn-info.btn-filter.d-lg-none.d-block'
);

var LayoutTwoSearchButtonLgElement = document.querySelector(
  '.content .container .row .col-md-12 .row .col-lg-8 .search-form .form .d-flex .btn.btn-success.d-none.d-lg-block.col-md-2'
);

var layoutTwoLg =
  LayoutTwoLeftLgElelement &&
  LayoutTwoRightLgElelement &&
  LayoutTwoFilterButtonLgElement &&
  LayoutTwoSearchButtonLgElement;

if (layoutTwoLg) {
  LayoutTwoLeftLgElelement.id = 'leftSection';
  LayoutTwoRightLgElelement.id = 'rightSection';
  LayoutTwoFilterButtonLgElement.id = 'filterButton';
  LayoutTwoSearchButtonLgElement.id = 'searchButton';
}

//Layout three

/*
This section does not do anything as it is not needed in the layout (see report for reason)
*/
var LayoutThreeElelement = document.querySelector(
  '.content .container .row .col-md-10'
);

if (LayoutThreeElelement) {
}

//Layout four
var LayoutFourLeftElelement = document.querySelector(
  '.content .container .row .d-none.d-lg-block.col-lg-3'
);

var LayoutFourMiddleElelement = document.querySelector(
  '.content .container .row .col-md-9.col-lg-6'
);

var LayoutFourRightElelement = document.querySelector(
  '.content .container .row .col-md-3'
);

var layoutFour =
  LayoutFourLeftElelement &&
  LayoutFourMiddleElelement &&
  LayoutFourRightElelement;

if (layoutFour) {
  LayoutFourLeftElelement.id = 'leftNav';
  LayoutFourMiddleElelement.id = 'mainSection';
  LayoutFourRightElelement.id = 'rightSection';
}

//Layout five
var layoutFiveNavBar = document.querySelector(
  '.container .row .col-md-12 .navbar'
);

var LayoutFiveRightButtons = document.querySelectorAll(
  '.container .row.align-items-start .col-md-6.col-lg-4'
);

var LayoutFiveLeftElelement = document.querySelector(
  '.container .row .col-12.col-lg-8'
);

var LayoutFiveRightElelement = document.querySelector(
  '.content-group .content-group__content .container .row .col-lg-4'
);

var LayoutFiveColumns = document.querySelectorAll(
  '.content-group.with-background .content-group__content .container .row .col-12 .row .col-lg-6.d-flex.flex-column'
);

var layoutFive =
  layoutFiveNavBar &&
  LayoutFiveLeftElelement &&
  LayoutFiveRightElelement &&
  LayoutFiveColumns;
if (layoutFive) {
  layoutFiveNavBar.id = 'layoutFiveNavBar';
  layoutFiveNavBar.style = 'margin-top: 30px;';

  LayoutFiveRightButtons.forEach((x) => x.classList.add('topButtons'));
  LayoutFiveLeftElelement.id = 'leftSection';
  LayoutFiveRightElelement.id = 'rightSection';
  LayoutFiveColumns.forEach((x) => x.classList.add('rowOfColumns'));
}

//Layout six
var LayoutSixLeftElelement = document.querySelector(
  '.content .container .row .col-lg-8'
);

var LayoutSixRightElelement = document.querySelector(
  '.container .row .col-lg-4.d-none.d-lg-block'
);

var LayoutSixHiddenElement = document.querySelector(
  '.container .row .col-lg-8 .box.d-lg-none.mb-40'
);

var LayoutSixHiddenButton = document.querySelector(
  '.container .row .col-12 .btn.btn-lg.btn-success.d-lg-none.col-12.mb-30.ga-event'
);

var LayoutSixHiddenApplySection = document.querySelector(
  '.content-group .content-group__content.container .row .col-12 .box.d-lg-none.mb-0'
);

var LayoutSixCampusInformation = document.querySelector(
  '.content-group .content-group__content.container .row .col-lg-9'
);

var LayoutSixBuildings = document.querySelector(
  '.content-group .content-group__content.container .row .col-lg-3'
);

var LayoutSixRowOfColumns = document.querySelectorAll(
  '.content-group .content-group__content.container .row .col-lg-6'
);

var layoutSix =
  LayoutSixLeftElelement &&
  LayoutSixRightElelement &&
  LayoutSixHiddenElement &&
  LayoutSixHiddenButton &&
  LayoutSixHiddenApplySection &&
  LayoutSixCampusInformation &&
  LayoutSixBuildings &&
  LayoutSixRowOfColumns;

if (layoutSix) {
  LayoutSixLeftElelement.id = 'leftSection';

  LayoutSixRightElelement.id = 'rightSection';

  LayoutSixHiddenElement.id = 'hiddenSection';

  LayoutSixHiddenButton.id = 'hiddenButton';

  LayoutSixHiddenApplySection.id = 'hiddenApplySection';

  LayoutSixCampusInformation.id = 'campusInfoSection';

  LayoutSixBuildings.id = 'buildingsSection';

  LayoutSixRowOfColumns.forEach((x) =>
    x.classList.add('LayoutSixRowOfColumns')
  );
}

//Layout seven
var LayoutSevenLeftElelement = document.querySelector(
  '.container .row .d-none.d-lg-block.col-lg-3'
);

var LayoutSevenRightElelement = document.querySelector(
  '.container .row .col-md-12.col-lg-9'
);

var layoutSeven = LayoutSevenLeftElelement && LayoutSevenRightElelement;

if (layoutSeven) {
  LayoutSevenLeftElelement.id = 'leftSection';
  LayoutSevenRightElelement.id = 'rightSection';
}

//Layout eight
var LayoutEightTopTextElelement = document.querySelector(
  '.content .container .row .col-md-10'
);

var LayoutEightLeftElelement = document.querySelector(
  '.content .container .row .col-md-9'
);

var LayoutEightRightElelement = document.querySelector(
  '.content .container .row .col-md-3'
);

var layoutEight =
  LayoutEightTopTextElelement &&
  LayoutEightLeftElelement &&
  LayoutEightRightElelement;

if (layoutEight) {
  LayoutEightTopTextElelement.id = 'topTextSection';
  LayoutEightLeftElelement.id = 'leftSection';
  LayoutEightRightElelement.id = 'rightSection';
}

//Layout nine
/*
This section does not do anything as it is not needed (see report for reason)
*/
var LayoutNineElelement = document.querySelector('.row .col-md-12');

if (LayoutNineElelement) {
}

//Layout ten
var LayoutTenTopElelement = document.querySelector(
  '.content .container .row .col-md-12'
);

var LayoutTenLeftElelement = document.querySelector(
  '.content .container .row .col-md-9'
);

var LayoutTenRightElelement = document.querySelector(
  '.content .container .row .col-md-3'
);

var layoutTen =
  LayoutTenTopElelement && LayoutTenLeftElelement && LayoutTenRightElelement;

if (layoutTen) {
  LayoutTenLeftElelement.id = 'leftSection';
  LayoutTenRightElelement.id = 'rightSection';
}

//Layout eleven
var LayoutElevenLeftElelement = document.querySelector('.row .col-md-6');
var LayoutElevenRightElelement = document.querySelector('.row #map-list');

var layoutEleven = LayoutElevenLeftElelement && LayoutElevenRightElelement;

if (layoutEleven) {
  LayoutElevenLeftElelement.id = 'leftSection';
  LayoutElevenRightElelement.id = 'rightSection';
}

/*
Creating the accessibility bar and adding it to the webpage
*/

//Create the element using the createElement method.
var myDiv = document.createElement('div');

//Set its unique ID.
myDiv.classList = 'navbar mb-50 container';

var bodySelector = document.querySelector('body');

bodySelector.id = 'bodyOfPage';

var bodyOfPage = document.getElementById('bodyOfPage');

bodyOfPage.innerHTML =
  '<div alt="text and layout changer accessibilty bar>\
  <ul id="uniqueAccessabilityBar" class="nav fixed-top accessabilityBar row bg-light" style="position: sticky!important; z-index:99999999999999999; display: flex; flex-direction: row; text-align-last: center;">\
<li class="nav-item col">\
<button type="button" class="btn btn-danger btn-lg" alt="click to decrease font size" style="background-color: #d4374a; color: #fff;" id="decreaseFontSize">\
  Decrease font size\
</button>\
</li>\
\
<li class="nav-item col">\
<button type="button" class="btn btn-danger btn-lg" alt="click to return font size to default" style="background-color: #d4374a; color: #fff;" id="defaultFontSize">\
  Default font size\
</button>\
</li>\
\
    <li class="nav-item col" id="demo">\
      <button type="button" class="btn btn-danger btn-lg" alt="click to increase font size" style="background-color: #d4374a; color: #fff;" id="increaseFontSize">\
        Increase font size\
      </button>\
    </li>\
\
\
    </ul>\
    </div>' +
  bodyOfPage.innerHTML;

/*
adds the click event to the buttons
*/

document
  .getElementById('increaseFontSize')
  .addEventListener('click', increaseFontSize);

document
  .getElementById('decreaseFontSize')
  .addEventListener('click', decreaseFontSize);

document
  .getElementById('defaultFontSize')
  .addEventListener('click', defaultFontSize);

/*
This is used to know how many times the buttons are pressed
The increase button adds one
The decrease button subtracts one
The default button resets the value to 0
*/
var num = 0;

/*
This function is called when the increase button is clicked
It changes the font size and the line height
*/
function timesTheFontSize(tagName: any) {
  var increaseAllTextSize = document.getElementsByTagName(tagName);
  for (let i = 0; i < increaseAllTextSize.length; i++) {
    let fontSize = window
      .getComputedStyle(increaseAllTextSize[i], null)
      .getPropertyValue('font-size');
    fontSize = parseFloat(fontSize);

    increaseAllTextSize[i].style.fontSize = fontSize * 1.2 + 'px';

    let lineHeight = window
      .getComputedStyle(increaseAllTextSize[i], null)
      .getPropertyValue('line-height');
    lineHeight = parseFloat(lineHeight);

    increaseAllTextSize[i].style.lineHeight = lineHeight * 1.2 + 'px';
  }

  var increaseAllTextSizeClass = document.getElementsByClassName(tagName);
  for (let i = 0; i < increaseAllTextSizeClass.length; i++) {
    let fontSize = window
      .getComputedStyle(increaseAllTextSizeClass[i], null)
      .getPropertyValue('font-size');
    fontSize = parseFloat(fontSize);

    increaseAllTextSizeClass[i].style.fontSize = fontSize * 1.2 + 'px';

    let lineHeight = window
      .getComputedStyle(increaseAllTextSizeClass[i], null)
      .getPropertyValue('line-height');
    lineHeight = parseFloat(lineHeight);

    increaseAllTextSizeClass[i].style.lineHeight = lineHeight * 1.2 + 'px';
  }
}

/*
This function runs through all of the tag names and classes that are needed to change all of the text on the page
*/
function timesTheFontSizeOnceOnAllTags() {
  timesTheFontSize('p');
  timesTheFontSize('em');
  timesTheFontSize('nav-link');
  timesTheFontSize('accordion-section-header-title');
  timesTheFontSize('btn-primary');
  timesTheFontSize('search-form-clear');
  timesTheFontSize('ga-event');
  timesTheFontSize('profile-contact-telephone');
  timesTheFontSize('caption');
  timesTheFontSize('li');
  timesTheFontSize('h1');
  timesTheFontSize('h2');
  timesTheFontSize('h3');
  timesTheFontSize('h4');
  timesTheFontSize('h5');
  timesTheFontSize('h6');
  timesTheFontSize('time');
  timesTheFontSize('blockquote');
  timesTheFontSize('figcaption');
  timesTheFontSize('button');
  timesTheFontSize('th');
  timesTheFontSize('td');
  timesTheFontSize('span');
  timesTheFontSize('select');
  timesTheFontSize('label');
  timesTheFontSize('input');
  timesTheFontSize('title');
}

/*
This function is called when the decrease button is clicked
It changes the font size and the line height
*/
function divideTheFontSize(tagName: any) {
  var divideAllTextSize = document.getElementsByTagName(tagName);
  for (let i = 0; i < divideAllTextSize.length; i++) {
    let fontSize = window
      .getComputedStyle(divideAllTextSize[i], null)
      .getPropertyValue('font-size');
    fontSize = parseFloat(fontSize);

    divideAllTextSize[i].style.fontSize = fontSize / 1.2 + 'px';

    let lineHeight = window
      .getComputedStyle(divideAllTextSize[i], null)
      .getPropertyValue('line-height');
    lineHeight = parseFloat(lineHeight);

    divideAllTextSize[i].style.lineHeight = lineHeight / 1.2 + 'px';
  }

  var divideAllTextSizeClass = document.getElementsByClassName(tagName);
  for (let i = 0; i < divideAllTextSizeClass.length; i++) {
    let fontSize = window
      .getComputedStyle(divideAllTextSizeClass[i], null)
      .getPropertyValue('font-size');
    fontSize = parseFloat(fontSize);

    divideAllTextSizeClass[i].style.fontSize = fontSize / 1.2 + 'px';

    let lineHeight = window
      .getComputedStyle(divideAllTextSizeClass[i], null)
      .getPropertyValue('line-height');
    lineHeight = parseFloat(lineHeight);

    divideAllTextSizeClass[i].style.lineHeight = lineHeight / 1.2 + 'px';
  }
}

/*
This function runs through all of the tag names and classes that are needed to change all of the text on the page
*/
function divideTheFontSizeOnceOnAllTags() {
  divideTheFontSize('p');
  divideTheFontSize('em');
  divideTheFontSize('nav-link');
  divideTheFontSize('accordion-section-header-title');
  divideTheFontSize('btn-primary');
  divideTheFontSize('search-form-clear');
  divideTheFontSize('ga-event');
  divideTheFontSize('profile-contact-telephone');
  divideTheFontSize('caption');
  divideTheFontSize('li');
  divideTheFontSize('h1');
  divideTheFontSize('h2');
  divideTheFontSize('h3');
  divideTheFontSize('h4');
  divideTheFontSize('h5');
  divideTheFontSize('h6');
  divideTheFontSize('time');
  divideTheFontSize('blockquote');
  divideTheFontSize('figcaption');
  divideTheFontSize('button');
  divideTheFontSize('th');
  divideTheFontSize('td');
  divideTheFontSize('span');
  divideTheFontSize('select');
  divideTheFontSize('label');
  divideTheFontSize('input');
  divideTheFontSize('title');
}

/*
This function:
Runs calls the function that increases the font size and line height
Adds one to the value of num
Uses if statements so that correct layouts code is being called to change the layout
*/
function increaseFontSize() {
  timesTheFontSizeOnceOnAllTags();

  num = num + 1;

  // layout 1
  if (layoutOne) {
    if (num == 4) {
      mobileLayoutOne();
    }
    if (num == 3) {
      desktopLayoutOne();
    }
  }

  /*
  //Uncomment 1.2 to view it. Make sure the other two layout one's are commented out
  //layout 1.2
  if (layoutOnePointTwo) {
    if (num == 4) {
      mobileLayoutOnePointTwo();
    }

    if (num == 3) {
      desktopLayoutOnePointTwo();
    }
  }
  //end of layout 1.2 
  */

  /*
//Uncomment 1.3 to view it. Make sure the other two layout one's are commented out
  //layout 1.3
  if (layoutOnePointThree) {
    if (num == 4) {
      mobileLayoutOnePointThree();
    }

    if (num == 3) {
      tabletLayoutOnePointThree();
    }
    if (num == 2) {
      desktopLayoutOnePointThree();
    }
  }
  //end of layout 1.3 
  */

  //layout 2 md
  if (layoutTwoMd) {
    if (num == 4) {
      mobileLayoutTwoMd();
    }

    if (num == 3) {
      desktopLayoutTwoMd();
    }
  }

  //layout 2 lg
  if (layoutTwoLg) {
    if (num == 5) {
      mobileLayoutTwoLg();
    }

    if (num == 4) {
      desktopLayoutTwoLg();
    }
  }

  //layout 4
  if (layoutFour) {
    if (num == 4) {
      mobileLayoutFour();
    }

    if (num == 3) {
      tabletLayoutFour();
    }
  }

  //layout 5
  if (layoutFive) {
    if (num == 3) {
      mobileLayoutFive();
    }

    if (num == 2) {
      desktopLayoutFive();
    }
  }

  //layout 6
  if (layoutSix) {
    if (num == 4) {
      tabletLayoutSix();
    }

    if (num == 3) {
      desktopLayoutSix();
    }
  }

  //layout 7
  if (layoutSeven) {
    if (num == 4) {
      tabletLayoutSeven();
    }

    if (num == 3) {
      desktopLayoutSeven();
    }
  }

  //layout 8
  if (layoutEight) {
    if (num == 5) {
      mobileLayoutEight();
    }

    if (num == 4) {
      desktopLayoutEight();
    }
  }

  //layout 10
  if (layoutTen) {
    if (num == 5) {
      mobileLayoutTen();
    }

    if (num == 4) {
      desktopLayoutTen();
    }
  }

  //layout 11
  if (layoutEleven) {
    if (num == 3) {
      mobileLayoutEleven();
    }

    if (num == 2) {
      desktopLayoutEleven();
    }
  }
}

/*
This function:
Runs calls the function that decreases the font size and line height
Subtracts one to the value of num
Uses if statements so that correct layouts code is being called to change the layout
*/
function decreaseFontSize() {
  if (num !== 0) {
    num = num - 1;

    divideTheFontSizeOnceOnAllTags();

    //layout 1
    if (layoutOne) {
      if (num == 4) {
        mobileLayoutOne();
      }

      if (num == 3) {
        desktopLayoutOne();
      }
    }

    /*
    //start of 1.2 comment it in and the other two layout one's out to view
    //layout 1.2
    if (layoutOnePointTwo) {
      if (num == 4) {
        mobileLayoutOnePointTwo();
      }

      if (num == 3) {
        desktopLayoutOnePointTwo();
      }
    }
    //end of layout 1.2
    */

    /*
    //start of 1.3 comment it in and the other two layout one's out to view
    //layout 1.3
    if (layoutOnePointThree) {
      if (num == 4) {
        mobileLayoutOnePointThree();
      }

      if (num == 3) {
        tabletLayoutOnePointThree();
      }
      if (num == 2) {
        desktopLayoutOnePointThree();
      }
    }
    //end of layout 1.3
    */

    //layout 2 md
    if (layoutTwoMd) {
      if (num == 4) {
        mobileLayoutTwoMd();
      }

      if (num == 3) {
        desktopLayoutTwoMd();
      }
    }

    //layout 2 lg
    if (layoutTwoLg) {
      if (num == 5) {
        mobileLayoutTwoLg();
      }

      if (num == 4) {
        desktopLayoutTwoLg();
      }
    }

    //layout 4
    if (layoutFour) {
      if (num == 4) {
        mobileLayoutFour();
      }

      if (num == 3) {
        tabletLayoutFour();
      }

      if (num == 2) {
        desktopLayoutFour();
      }
    }

    //layout 5
    if (layoutFive) {
      if (num == 3) {
        mobileLayoutFive();
      }

      if (num == 2) {
        desktopLayoutFive();
      }
    }

    //layout six
    if (layoutSix) {
      if (num == 4) {
        tabletLayoutSix();
      }

      if (num == 3) {
        desktopLayoutSix();
      }
    }

    //layout seven
    if (layoutSeven) {
      if (num == 4) {
        tabletLayoutSeven();
      }

      if (num == 3) {
        desktopLayoutSeven();
      }
    }

    //layout eight
    if (layoutEight) {
      if (num == 5) {
        mobileLayoutEight();
      }

      if (num == 4) {
        desktopLayoutEight();
      }
    }

    //layout ten
    if (layoutTen) {
      if (num == 5) {
        mobileLayoutTen();
      }

      if (num == 4) {
        desktopLayoutTen();
      }
    }

    //layout eleven
    if (layoutEleven) {
      if (num == 3) {
        mobileLayoutEleven();
      }

      if (num == 2) {
        desktopLayoutEleven();
      }
    }
  }
}

/*
This function:
Runs calls the function that resets the font size and line height to the default value
Resets the value of num to zero
Uses if statements so that correct layouts code is being called to change the layout
*/
function defaultFontSize() {
  function returnToDefaultLayout(numValue) {
    for (let i = 0; i < numValue; i++) {
      divideTheFontSizeOnceOnAllTags();
    }
  }

  returnToDefaultLayout(num);

  num = 0;

  //layout 1
  if (layoutOne) {
    desktopLayoutOne();
  }

  /*
  //start of 1.2 comment it in and the other two layout one's out to view
  //layout 1.2
  if (layoutOnePointTwo) {
    desktopLayoutOnePointTwo();
  }
  //end of layout 1.2
  */

  /*
  //start of 1.3 comment it in and the other two layout one's out to view
  //layout 1.3
  if (layoutOnePointThree) {
    desktopLayoutOnePointThree();
  }
  //end of layout 1.3
  */

  //layout 2 md
  if (layoutTwoMd) {
    desktopLayoutTwoMd();
  }

  //layout 2 lg
  if (layoutTwoLg) {
    desktopLayoutTwoLg();
  }

  //layout 4
  if (layoutFour) {
    desktopLayoutFour();
  }

  //layout 5
  if (layoutFive) {
    desktopLayoutFive();
  }

  //layout 6
  if (layoutSix) {
    desktopLayoutSix();
  }

  //layout 7
  if (layoutSeven) {
    desktopLayoutSeven();
  }

  //layout 8
  if (layoutEight) {
    desktopLayoutEight();
  }

  //layout 10
  if (layoutTen) {
    desktopLayoutTen();
  }

  //layout 8
  if (layoutEleven) {
    desktopLayoutEleven();
  }
}

/*
These functions change the layout of the page by adding and removing bootstrap classes
They are labeled mobile, tablet, or desktop as they based off of the pages layout in mobile, tablet, or desktop view
They are sorted by page layout
*/

//layout 1

//mobile
function mobileLayoutOne() {
  var elementsRowOne = document.querySelectorAll('.rowOne');

  elementsRowOne.forEach((x) => x.classList.remove('col-md-6'));
  elementsRowOne.forEach((x) => x.classList.add('col-md-12'));

  var elementsRowTwo = document.querySelectorAll('.rowTwo');

  elementsRowTwo.forEach((x) => x.classList.remove('col-md-4'));
  elementsRowTwo.forEach((x) => x.classList.add('col-md-12'));

  var elementsRowThree = document.querySelectorAll('.rowThree');

  elementsRowThree.forEach((x) => x.classList.remove('col-md-3'));
  elementsRowThree.forEach((x) => x.classList.add('col-md-12'));
}

//desktop
function desktopLayoutOne() {
  var elementsRowOne = document.querySelectorAll('.rowOne');

  elementsRowOne.forEach((x) => x.classList.remove('col-md-12'));
  elementsRowOne.forEach((x) => x.classList.add('col-md-6'));

  var elementsRowTwo = document.querySelectorAll('.rowTwo');

  elementsRowTwo.forEach((x) => x.classList.remove('col-md-12'));
  elementsRowTwo.forEach((x) => x.classList.add('col-md-4'));

  var elementsRowThree = document.querySelectorAll('.rowThree');

  elementsRowThree.forEach((x) => x.classList.remove('col-md-12'));
  elementsRowThree.forEach((x) => x.classList.add('col-md-3'));
}

/*
//start of 1.2 comment it in and the other two layout one's out to view
//layout 1.2

//mobile
function mobileLayoutOnePointTwo() {
  var elementsRowOne = document.querySelectorAll('.rowOneElementOne');

  elementsRowOne.forEach((x) => x.classList.remove('col-md-6'));
  elementsRowOne.forEach((x) => x.classList.add('col-md-12'));

  var elementsRowOne = document.querySelectorAll('.rowOneElementTwo');

  elementsRowOne.forEach((x) => x.classList.remove('col-md-6'));
  elementsRowOne.forEach((x) => x.classList.add('col-md-12'));

  var elementsRowTwo = document.querySelectorAll('.rowTwo');

  elementsRowTwo.forEach((x) => x.classList.remove('col-md-3'));
  elementsRowTwo.forEach((x) => x.classList.add('col-md-12'));

  var elementsRowThree = document.querySelectorAll('.rowThree');

  elementsRowThree.forEach((x) => x.classList.remove('col-md-6'));
  elementsRowThree.forEach((x) => x.classList.add('col-md-12'));
}

//desktop
function desktopLayoutOnePointTwo() {
  var elementsRowOne = document.querySelectorAll('.rowOneElementOne');

  elementsRowOne.forEach((x) => x.classList.remove('col-md-12'));
  elementsRowOne.forEach((x) => x.classList.add('col-md-6'));

  var elementsRowOne = document.querySelectorAll('.rowOneElementTwo');

  elementsRowOne.forEach((x) => x.classList.remove('col-md-12'));
  elementsRowOne.forEach((x) => x.classList.add('col-md-6'));

  var elementsRowTwo = document.querySelectorAll('.rowTwo');

  elementsRowTwo.forEach((x) => x.classList.remove('col-md-12'));
  elementsRowTwo.forEach((x) => x.classList.add('col-md-3'));

  var elementsRowThree = document.querySelectorAll('.rowThree');

  elementsRowThree.forEach((x) => x.classList.remove('col-md-12'));
  elementsRowThree.forEach((x) => x.classList.add('col-md-6'));
}
//end of layout 1.2
*/

/*
//start of 1.3 comment it in and the other two layout one's out to view
//layout 1.3

//mobile
function mobileLayoutOnePointThree() {
  var elementsRowOne = document.querySelectorAll('.rowOneElementOne');

  elementsRowOne.forEach((x) => x.classList.remove('col-md-6'));
  elementsRowOne.forEach((x) => x.classList.add('col-md-12'));

  var elementsRowOne = document.querySelectorAll('.rowOneElementsTwoThree');

  elementsRowOne.forEach((x) => x.classList.remove('col-md-3'));
  elementsRowOne.forEach((x) => x.classList.add('col-md-12'));

  var elementsRowTwo = document.querySelectorAll('.secondBlock');

  elementsRowTwo.forEach((x) => x.classList.remove('col-md-4'));
  elementsRowTwo.forEach((x) => x.classList.add('col-md-12'));
}

//tablet
function tabletLayoutOnePointThree() {
  var navBar = document.getElementById('layoutOnePointThreeNavBar');
  navBar.classList.add('d-none');
}

//desktop
function desktopLayoutOnePointThree() {
  var elementsRowOne = document.querySelectorAll('.rowOneElementOne');

  elementsRowOne.forEach((x) => x.classList.remove('col-md-12'));
  elementsRowOne.forEach((x) => x.classList.add('col-md-6'));

  var elementsRowOne = document.querySelectorAll('.rowOneElementsTwoThree');

  elementsRowOne.forEach((x) => x.classList.remove('col-md-12'));
  elementsRowOne.forEach((x) => x.classList.add('col-md-3'));

  var elementsRowTwo = document.querySelectorAll('.secondBlock');

  elementsRowTwo.forEach((x) => x.classList.remove('col-md-12'));
  elementsRowTwo.forEach((x) => x.classList.add('col-md-4'));

  var navBar = document.getElementById('layoutOnePointThreeNavBar');
  navBar.classList.remove('d-none');
}

//end of layout 1.3
*/

//layout 2 md

//mobile
function mobileLayoutTwoMd() {
  var elementLeft = document.getElementById('leftSection');
  elementLeft.classList.remove('d-md-block');

  var elementRight = document.getElementById('rightSection');
  elementRight.classList.remove('col-md-8');
  elementRight.classList.add('col-md-12');

  var elementFilterButton = document.getElementById('filterButton');
  elementFilterButton.classList.remove('d-md-none');

  var elementSearchButton = document.getElementById('searchButton');
  elementSearchButton.classList.remove('d-md-block');

  var elementSearchButton = document.getElementById('searchIcon');
  elementSearchButton.classList.remove('d-md-none');
}

//desktop
function desktopLayoutTwoMd() {
  var elementLeft = document.getElementById('leftSection');

  var elementRight = document.getElementById('rightSection');

  var elementFilterButton = document.getElementById('filterButton');

  var elementSearchButton = document.getElementById('searchButton');

  var elementSearchButton = document.getElementById('searchIcon');

  if (elementRight.classList.contains('col-md-12')) {
    elementLeft.classList.add('d-md-block');

    elementRight.classList.remove('col-md-12');
    elementRight.classList.add('col-md-8');

    elementFilterButton.classList.add('d-md-none');

    elementSearchButton.classList.add('d-md-block');

    elementSearchButton.classList.add('d-md-none');
  }
}

//layout 2 lg

//mobile
function mobileLayoutTwoLg() {
  var elementLeft = document.getElementById('leftSection');
  elementLeft.classList.remove('d-lg-block');

  var elementRight = document.getElementById('rightSection');
  elementRight.classList.remove('col-lg-8');
  elementRight.classList.add('col-lg-12');

  var elementFilterButton = document.getElementById('filterButton');
  elementFilterButton.classList.remove('d-lg-none');

  var elementSearchButton = document.getElementById('searchButton');
  elementSearchButton.classList.remove('d-lg-block');
}

//desktop
function desktopLayoutTwoLg() {
  var elementLeft = document.getElementById('leftSection');

  var elementRight = document.getElementById('rightSection');

  var elementFilterButton = document.getElementById('filterButton');

  var elementSearchButton = document.getElementById('searchButton');

  var elementSearchButton = document.getElementById('searchIcon');

  if (elementRight.classList.contains('col-lg-12')) {
    elementLeft.classList.add('d-lg-block');

    elementRight.classList.add('col-lg-8');
    elementRight.classList.remove('col-lg-12');

    elementFilterButton.classList.add('d-lg-none');

    elementSearchButton.classList.add('d-lg-block');
  }
}

//layout four
//mobile
function mobileLayoutFour() {
  var element = document.getElementById('mainSection');
  element.classList.remove('col-lg-6');
  element.classList.add('col-lg-12');
}

//tablet
function tabletLayoutFour() {
  var element = document.getElementById('mainSection');
  element.classList.remove('col-lg-6');
  element.classList.add('col-lg-9');

  var elementMainBefore = document.getElementById('mainSection');
  if (elementMainBefore.classList.contains('col-lg-12')) {
    elementMainBefore.classList.remove('col-lg-12');
    elementMainBefore.classList.add('col-lg-9');

    // var elementLeft = document.getElementById('leftNav');
    // elementLeft.classList.add('d-lg-block');
    // elementLeft.classList.add('col-lg-3');
    var elementLeft = document.getElementById('leftNav');
    elementLeft.classList.remove('d-lg-block');
    elementLeft.classList.remove('col-lg-3');
  }

  element.classList.remove('col-md-9');
  element.classList.add('col-md-12');

  var elementLeft = document.getElementById('leftNav');
  elementLeft.classList.remove('d-lg-block');
  elementLeft.classList.remove('col-lg-3');

  // var elementRight = document.getElementById('rightSection');
  // elementRight.classList.remove('col-md-3');
  // elementRight.classList.add('col-md-6');
}

// //tablet
// function tabletLayoutFour() {
//   var element = document.getElementById('mainSection');
//   element.classList.remove('col-lg-6');
//   element.classList.add('col-lg-9');

//   var elementMainBefore = document.getElementById('mainSection');
//   if (elementMainBefore.classList.contains('col-lg-12')) {
//     elementMainBefore.classList.remove('col-lg-12');
//     elementMainBefore.classList.add('col-lg-9');

//     var elementLeft = document.getElementById('leftNav');
//     elementLeft.classList.add('d-lg-block');
//     elementLeft.classList.add('col-lg-3');
//   }

//   element.classList.remove('col-md-9');
//   element.classList.add('col-md-12');

//   var elementRight = document.getElementById('rightSection');
//   elementRight.classList.remove('col-md-3');
//   elementRight.classList.add('col-md-6');
// }

//desktop
function desktopLayoutFour() {
  var elementLeft = document.getElementById('leftNav');
  // elementLeft.classList.add('d-none');
  elementLeft.classList.add('d-lg-block');
  elementLeft.classList.add('col-lg-3');

  var elementMainBefore = document.getElementById('mainSection');
  if (elementMainBefore.classList.contains('col-md-12')) {
    elementMainBefore.classList.remove('col-md-12');
  }

  if (elementMainBefore.classList.contains('col-lg-9')) {
    elementMainBefore.classList.remove('col-lg-9');
  }

  if (elementMainBefore.classList.contains('col-lg-12')) {
    elementMainBefore.classList.remove('col-lg-12');
  }

  elementMainBefore.classList.add('col-md-9');
  elementMainBefore.classList.add('col-lg-6');

  var elementRightBefore = document.getElementById('rightSection');

  if (elementRightBefore.classList.contains('col-md-6')) {
    elementRightBefore.classList.remove('col-md-6');
    elementRightBefore.classList.add('col-md-3');
  }
}

//layout five

//mobile
function mobileLayoutFive() {
  var topButtons = document.querySelectorAll('.topButtons');

  topButtons.forEach((x) => x.classList.remove('col-md-6'));
  topButtons.forEach((x) => x.classList.remove('col-lg-4'));
  topButtons.forEach((x) => x.classList.add('col-md-12'));

  var elementLeft = document.getElementById('leftSection');
  elementLeft.classList.remove('col-12');
  elementLeft.classList.remove('col-lg-8');
  elementLeft.classList.add('col-lg-12');

  var elementLeft = document.getElementById('rightSection');
  elementLeft.classList.remove('col-lg-4');
  elementLeft.classList.add('col-lg-6');

  var rowOfColumns = document.querySelectorAll('.rowOfColumns');

  rowOfColumns.forEach((x) => x.classList.remove('col-lg-6'));
  rowOfColumns.forEach((x) => x.classList.add('col-lg-12'));

  var navBar = document.getElementById('layoutFiveNavBar');
  navBar.classList.add('d-none');
}

//desktop
function desktopLayoutFive() {
  var topButtons = document.querySelectorAll('.topButtons');

  topButtons.forEach((x) => x.classList.remove('col-md-12'));
  topButtons.forEach((x) => x.classList.add('col-md-6'));
  topButtons.forEach((x) => x.classList.add('col-lg-4'));

  var elementLeft = document.getElementById('leftSection');
  elementLeft.classList.remove('col-lg-12');
  elementLeft.classList.add('col-12');
  elementLeft.classList.add('col-lg-8');

  var elementLeft = document.getElementById('rightSection');
  elementLeft.classList.remove('col-lg-6');
  elementLeft.classList.add('col-lg-4');

  var rowOfColumns = document.querySelectorAll('.rowOfColumns');
  rowOfColumns.forEach((x) => x.classList.remove('col-lg-12'));
  rowOfColumns.forEach((x) => x.classList.add('col-lg-6'));

  var navBar = document.getElementById('layoutFiveNavBar');
  navBar.classList.remove('d-none');
}

//layout 6

//tablet
function tabletLayoutSix() {
  var elementLeft = document.getElementById('leftSection');

  if (elementLeft.classList.contains('col-lg-8')) {
    elementLeft.classList.remove('col-lg-8');
    elementLeft.classList.add('col-lg-12');

    var elementRight = document.getElementById('rightSection');
    elementRight.classList.remove('d-lg-block');

    var elementHiddenSection = document.getElementById('hiddenSection');
    elementHiddenSection.classList.remove('d-lg-none');

    var elementHiddenButton = document.getElementById('hiddenButton');
    elementHiddenButton.classList.remove('d-lg-none');

    var elementHiddenApplySection =
      document.getElementById('hiddenApplySection');
    elementHiddenApplySection.classList.remove('d-lg-none');

    var elementCampusInfoSection = document.getElementById('campusInfoSection');
    elementCampusInfoSection.classList.remove('col-lg-9');
    elementCampusInfoSection.classList.add('col-lg-12');

    var elementBuildingsSection = document.getElementById('buildingsSection');
    elementBuildingsSection.classList.remove('col-lg-3');
    elementBuildingsSection.classList.add('col-lg-12');

    var LayoutSixRowOfColumns = document.querySelectorAll(
      '.LayoutSixRowOfColumns'
    );
    LayoutSixRowOfColumns.forEach((x) => x.classList.remove('col-lg-6'));
    LayoutSixRowOfColumns.forEach((x) => x.classList.add('col-lg-12'));
  }
}

//desktop
function desktopLayoutSix() {
  var elementLeft = document.getElementById('leftSection');

  if (elementLeft.classList.contains('col-lg-12')) {
    elementLeft.classList.remove('col-lg-12');
    elementLeft.classList.add('col-lg-8');

    var elementRight = document.getElementById('rightSection');
    elementRight.classList.add('d-lg-block');

    var elementHiddenSection = document.getElementById('hiddenSection');
    elementHiddenSection.classList.add('d-lg-none');

    var elementHiddenButton = document.getElementById('hiddenButton');
    elementHiddenButton.classList.add('d-lg-none');

    var elementHiddenApplySection =
      document.getElementById('hiddenApplySection');
    elementHiddenApplySection.classList.add('d-lg-none');

    var elementCampusInfoSection = document.getElementById('campusInfoSection');
    elementCampusInfoSection.classList.remove('col-lg-12');
    elementCampusInfoSection.classList.add('col-lg-9');

    var elementBuildingsSection = document.getElementById('buildingsSection');
    elementBuildingsSection.classList.add('col-lg-3');
    elementBuildingsSection.classList.remove('col-lg-12');

    var LayoutSixRowOfColumns = document.querySelectorAll(
      '.LayoutSixRowOfColumns'
    );
    LayoutSixRowOfColumns.forEach((x) => x.classList.remove('col-lg-12'));
    LayoutSixRowOfColumns.forEach((x) => x.classList.add('col-lg-6'));
  }
}

//layout seven

//tablet
function tabletLayoutSeven() {
  var elementLeft = document.getElementById('leftSection');
  var elementRight = document.getElementById('rightSection');

  if (elementLeft.classList.contains('d-lg-block')) {
    elementLeft.classList.remove('d-lg-block');

    elementRight.classList.remove('col-md-12');
    elementRight.classList.remove('col-lg-9');
    elementRight.classList.add('col-lg-12');
  }
}

//desktop
function desktopLayoutSeven() {
  var elementLeft = document.getElementById('leftSection');
  var elementRight = document.getElementById('rightSection');

  if (elementLeft.classList.contains('d-lg-block')) {
  } else {
    elementLeft.classList.add('d-lg-block');
    elementRight.classList.add('col-md-12');
    elementRight.classList.add('col-lg-9');
    elementRight.classList.remove('col-lg-12');
  }
}

//layout 8

// mobile
function mobileLayoutEight() {
  var elementTop = document.getElementById('topTextSection');
  var elementLeft = document.getElementById('leftSection');
  var elementRight = document.getElementById('rightSection');

  if (elementTop.classList.contains('col-md-10')) {
    elementTop.classList.remove('col-md-10');
    elementTop.classList.add('col-lg-12');

    elementLeft.classList.remove('col-md-9');
    elementLeft.classList.add('col-lg-12');

    elementRight.classList.remove('col-md-3');
    elementRight.classList.add('col-lg-12');
  }
}

// desktop
function desktopLayoutEight() {
  var elementTop = document.getElementById('topTextSection');
  var elementLeft = document.getElementById('leftSection');
  var elementRight = document.getElementById('rightSection');

  if (elementTop.classList.contains('col-lg-12')) {
    elementTop.classList.remove('col-lg-12');
    elementTop.classList.add('col-md-10');

    elementLeft.classList.remove('col-lg-12');
    elementLeft.classList.add('col-md-9');

    elementRight.classList.remove('col-lg-12');
    elementRight.classList.add('col-md-3');
  }
}

//layout ten

// mobile
function mobileLayoutTen() {
  var elementLeft = document.getElementById('leftSection');
  var elementRight = document.getElementById('rightSection');

  if (elementLeft.classList.contains('col-md-9')) {
    elementLeft.classList.remove('col-md-9');
    elementLeft.classList.add('col-lg-12');

    elementRight.classList.remove('col-md-3');
    elementRight.classList.add('col-lg-12');
  }
}

// desktop
function desktopLayoutTen() {
  var elementLeft = document.getElementById('leftSection');
  var elementRight = document.getElementById('rightSection');

  if (elementLeft.classList.contains('col-lg-12')) {
    elementLeft.classList.remove('col-lg-12');
    elementLeft.classList.add('col-md-9');

    elementRight.classList.remove('col-lg-12');
    elementRight.classList.add('col-md-3');
  }
}

//layout eleven

// mobile
function mobileLayoutEleven() {
  var elementLeft = document.getElementById('leftSection');
  var elementRight = document.getElementById('rightSection');

  if (elementLeft.classList.contains('col-md-6')) {
    elementLeft.classList.remove('col-md-6');
    elementLeft.classList.add('col-lg-12');

    elementRight.classList.remove('col-md-6');
    elementRight.classList.add('col-lg-12');
  }
}

// desktop
function desktopLayoutEleven() {
  var elementLeft = document.getElementById('leftSection');
  var elementRight = document.getElementById('rightSection');

  if (elementLeft.classList.contains('col-lg-12')) {
    elementLeft.classList.remove('col-lg-12');
    elementLeft.classList.add('col-md-6');

    elementRight.classList.remove('col-lg-12');
    elementRight.classList.add('col-md-6');
  }
}

/* 
Reference list:

Phhu. 2020. Use javascript to add a CSS class to all elements with another class name. [[ ...document.getElementsByClassName("buttonSubmit") ].forEach( x => x.className += ' btn' )]. Available at: https://stackoverflow.com/questions/18294759/use-javascript-to-add-a-css-class-to-all-elements-with-another-class-name [Accessed: 1 October 2022] 

TypeScript, 2022. TypeScript 3.7. Available at: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html [Accessed: 10 July 2022]


*/
