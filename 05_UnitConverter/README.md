<div align="center">
        <img  width=250 src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="React Native Logo"/>
    <h2>Project Repository</h2>
</div>

## Overview of App

###### This is my fifth official app in react native, I learned new features, I made changes in addition to those passed in the tutorial, it is an app whose main objective is to convert values, primarily units of measure, for example _volume, mass, time, temperature_, among others, all of this from a package called **convert-units**.

###### This app is a youtube tutorial from the [Exteban Codes](https://www.youtube.com/channel/UCbWV65OoGP6mw2pGd0c5E-g) channel.

## Funcionalities

###### I loved the features of this app, basically, as I said before, it is an app to perform the _conversion of units of measures_, taking the library **convert-units** and performing all the functions from it. The app uses a **tabBar** which I believe is widely used for other functions in several apps, **dimensions** to take the user's screen size and also create files especially for the styles of my application

###### The main app is basically that, but I studied ways to better render the picker on android. I will say this in the next topic.

## New Things

###### this app uses several new features that I had never used, first, the menu form used to select the units of the app is made in a TabView, inside it with a TabBar, after that I also use a regex, to transform the data into a shape more legible.

###### First app I produce that has the styles in a separate file, leaving the code cleaner and more organized, as well as a file containing only the colors used throughout the app.

###### I use two components, one as home to just call that component in my App.js file and one to view the data conversion part. First time I use a Picker, from a community package, as well as a library that returns all measurements and features to create your conversion (convert-units).

## Changes

###### As I used a **picker** from the community, it changes sharply on _iOS_ and _Android_, being very simple and made on Android. I felt confident to make this change with my own hands, I searched pickers for android and found anyone that I managed to install, so I went for the idea of doing it as a **FlatList** using a strategy to render it again in each click, demonstrating the unit of measure clicked by the user, I believe that with this implementation of mine the app was more cool than in the original tutorial, however I used the **Platform** component of _react-native_ to check the user's device and thus make **this change only with Android users**.

<br>

<ul>
<li><b>React Native Components</b></li>
    <ul>
    <li>Dimensions</li>
        <ul>
        <li>Dimensions.get('window').width (To get window size)</li>
        </ul>
    <li>Platform</li>
        <ul>
        <li>Platform.OS (To get device type: 'IOS' || 'Android')</li>
        </ul>
    <li>FlatList</li>
        <ul>
        <li>To make the "picker" android version</li>
        </ul>
    <li>useEffect</li>
    </ul>
    
<br>

<li><b>React Native Community</b></li>
    <ul>
    <li>Picker</li>
    </ul>

<br>

<li><b>Expo Components</b></li>
    <ul>
    <li>SimpleLineIcons</li>
        <ul>
        <li>A easy icon pack</li>
        </ul>
    </ul>

<br>

<li><b>Tab View Imports</b></li>
    <ul>
    <li>TabView</li>
    <li>TabBar</li>
    </ul>

<br>

<li><b>Library convert-units</b></li>
    <ul>
    <li>convert().measures() - To get all units</li>
    </ul>

<br>

<li><b>Others</b></li>
    <ul>
    <li>colors</li>
        <ul>
        <li>file with all color settings of the app</li>
        </ul>
    <li>styles</li>
        <ul>
        <li>file with all styles settings of the specific components</li>
        </ul>
    <li>Regex</li>
        <ul>
        <li>/([A-Z])/g, ' $1' - Regex to transform strings in Camel Case</li>
        </ul>
    </ul>

<br>

</ul>

---

##### All information can be changed by people who understand the subject more, so if you feel comfortable, you can contact me to teach me what you know! I'll be happy!

<div align="end"><b>V0.0.1</b></div>
