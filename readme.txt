THIS IS A REVISION TEXT FILE
Day 1
    -fevicon:used to add icon.
    -learned about css :div,margin,padding boxmodel etc
    -dev tools in browser
Day 2
    -learned about css display property -block,inline,block-inline,none
    -in block property the container takes the full width of the page
    -in inline property the container takes only that amount of space which
     which is required to fill its element
    -Negative side of inline is that we cant modify the width
    -so block-inline is used which has property of inline with additional
     additional feature of width adjustment
    -none is used to hide the container,it is different from visibility:hidden as it just reduces the
     opacity of the container to zero but the container takes its space in the browser
Day 3
    -CSS positioning : -learned about static which fixes the blocks and you can't use any property of positioning
                       -learned about relative and how space can be given from       
                        from all the side like right left top bottom so it shiftes
                        the contaioner but it does nt affect any other contaioner
                        it just positions it on top of other element if they come in it's
                        path
                       -learned about absolute positioning which works relative to the parent container,parent can be a div ,body or anything like that
                        diff between relative and absolute is that relative positioning is done respective to the positioning of the element default
                        where as absolute positioning is done with relative to parent 
                        fixed positioning helps to fix a section or div or element on the web page which doesnt move while scrolling
Day 4
    -Css font styling :font family is just consider as font which font you want to use and also by separating the values in font family by comma so that if
                       if one font is not shown due to some reason its alternative will be shown >
                       Got to new about embedded code and how to use it from google fonts and how to add its link in the html code
                       :learned about css sizing how it works and what is difference between em,%,rem,px,100%==16px,and 16px==1rem
                       
                       :learned about css float and clear and how to use them to make your website more appealing and next to god level
15-5-25
    -started javascript -Till now basics of  javascript has been knowed 
                         about variables datatype their naming console info ,control flow if else etc.
                         also learned about '==' and '===' difference :
                                    == is used for comparing two condition and it only compares value.
                                    === is used to check whether the values compared are same in terms of value and 
16-5-2025
                        learned how to use if else 
                        also learned about collection int a=[1,2,2,3,3,4] this is how array is declared and to check anyitem is present in 
                        array just use -> a.includes(x); if it returns true its good meaning yup there is that element in array and if not then 
                        it will return false
17-5--2025
                        finished javascript basics and now moving towards DOM(document object model) 
                        there are three ways to add js to a website.
                        first- using onload="alert('hello')" u can you this in body aur tags accodingly this will load the js 
                        when that tag is executed and since the html is line by line executed language
                        second- using internal js as script now you can add this anywhere in the html file but it is advised to use it at the end
                        of the body as js code takes time to get executed and hence if it will be placed above then you it will be executed in the website
                        it will take time and until then all the content of the website is not uploaded so it is in appropriate .
                        third- usnig an exteral file 

                        *One imported property of js is if we are using any element in the js code and it is not yet executed in the code 
                        it produces an error in the console which says that the object is null ;

                        DOM - document object model is used to categorize the elements in the website like it stores everything in document which is the
                        root node of the object model then in lev 1 html is present and then in lvl 2 head and body is present and so on so the head is the 
                        child of html tag so also body at

18-5-2025
                    Today I learned about how many are the types by which we can select an object:-
                    1.using document.getElementsByClassName()-this returns an array of the objects whose class is same to edit or to do change any
                      element you to use index.
                    2.using document.getElementsByTagName()- this returns an array of the objects who of are of the same tag name use indexing
                    example of above both-
                                            document.getElementsByClassName("title")[0].innerHTML="bye";
                                            document.getElementsByTagName("li")[0].innerHTML="how";
                    3.using document.getElementById- This returns a single object can be used directly without indexing
                    4.using document.querrySelector() and document.querrySelectorAll() -the first one returns single objuect other an array
                     most used selector,this can be used to select different types of object ,an tag name can be used , for id use # and for 
                     class use . and also there are different ways of selecting an object like if hierachly like if you have to select an anchor tag
                     which is inside a list just write path with space , also if we have to select any element of different of its variation we can also do that
                     example-
                      document.querrySelector(ul li a) -> selects a in li of ul
                      document.querrySelector(li.items) -> li jiska class item ho.

                    document.querrySelector().classList; this defines how many classes are of an object,we can .add(),.remove(),.toggle()some classes
                    this is used when we have a class already styled so we add this class using js and hence class attributes are applied
                    we can also remove some classes of an object to show diff at some click or a particular behaivor on website
                    toggle is used to add and remove class alternatively when an object is clicked or on any following event .
                    
                    TEXT CHANGE:
                        There are many ways of changing the text of an object like h1 li or anything.
                        1. .innerHTML=""; this returns everthing that is inside the h1 if in h1 the text is surrounded by strong tag or any other tag
                                          then it will also show that but it benefits because we can use different tags while we change the text
                                          ex - innerHTML="<strong>harshit</strong>" this will make harshit strong 

                        2. .textContent; this only returns text if it is surrounded by any another it will ommit it if we will change text using this 
                                         the tag used will be removed and also you can add tags as in innerHTML
                        3. .innerText ; works same as .textContent.
                    ATTRIBUTES:;
                        We can also change the attributes of the tag like href ,input values
                        use .attributes to know how many attributes are of the tag or selected object
                        use .getattribute("")-to know the value of particular attribute 
                        use .setattribute("","") - use to change the value of a certain attribute.
17-06-2025         

                    LETS START JQUERRY
                    What is JQuerry?
                    JQuerry is a library used to for shortening the code of js for example in js if we have to select an
                    element then in js we have to use the document.querrySelector("h1") rather than just using a JQuerry or $ sign for here 
                    u have to use $("h1") and also if we have to locate we can use $("#div-1 h2")-to select the h2 of div-1 id.

                    to incoporate jquerry in your website use cdn of jquerry similar to bootstrap.
1/7/2025
                    After a long break lets start again!!
                    so we were learning about jquerry and got now about something ,we can use jquerry to change css like ,
                    $("h1").css("color","red"); this is used to set the value of the h1,to get the value remove the red section and comma

                    you can also add a class ,remove a class and check whether a class is present in an element
                    $("h1").addClass("big-h1 font-change"),we can add multiple classes by just adding it to by spaces
                    $("h1").removeClass("big-h1 font-change") - to remove a class
                    $("h1").hasClass("big-h1")-to check whether the h1 contains the class big-h1.

                    we have learnt about .text("...."); changes the text inside any element

                    we also learnt about attributs and how to change its attribute
                    use:- .attr("src","www.google.com")
                    if you have to get the value only use first paranthesis and you have to set the value of any attribute use both parenthesis
                    separated by comma.
                    now use of .before(),.after(),.append,.prepend,.remove 
                    difference between append and after is append is use to add some thing after the text/content of an element and after is used to 
                    to it after that element
                    Animation:
                        .hide,show
                        .slideUp,slideDown
                        toggle,slideToggle
                        animate({

                        }):which only changes the property whose values is in numbers like opacity width etc cant changes things which are not numeric
                        like color.

                
                    ✅ Projects for practice:

                            Weather App (3rd-party API use)

                            Notes App (CRUD + MongoDB)  

                            Auth System (Login/Signup with JWT)

                            Blog App (Posts, Comments, Users)

                            Expense Tracker

                            Chat App (socket.io)

12/7/2025
                    jquerry acha khasa hogya hai ab node pe move karte hai toh node me sabse phale yhi sikhaya ki node kya hota hai aur kuch ka server kaise banate hai
                    local server aur isko express ke sath learn kiya kaise ek server kaam karta hai kaise.
                    NPM modules kaise install karte aur kaise require karte hai aur toh aur native modules like http ,fs kya hai 
                    REPL(read evalution print loop) ye ek editor type ka chiz hai jab cmd ya bash me node likhenge toh ek > karke symbol aega 
                    usme nodejs ki commands likh skte hai
                    aur toh aur .exit ya do baar ctrl + c dabao exit karne ke liye

                    Express ek framework hai 
                    
                    lets understand what is expressjs it is a framework used to build web application on nodejs ,this framework helps in making of web
                    servers in less code and more efficient way ,you can use express just use npm i express after you have setup your project by npm init
                     
                     incoporate express by   --> const express =require('express')
                     and now make a app --> const app=express();


                     routes like -> '/' aur "/about" ye routes and you can use 
                     app.get('/',function(req,res){
                        res.send("hiii")
                     })
                     is tarah hum ek route ko explain karte hai 
                     kae routes ko hum define kar skte hai jaise app.post bhi use karskte hai aur kya js use hoga ye bhi bata skte hai
                     har route pe 
                     

                        