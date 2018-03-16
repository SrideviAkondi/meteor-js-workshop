# Meteor-JS-workshop
A workshop on basic CRUD operations using Meteor JS. It is a full stack framework that runs on top of Node JS and integrates NoSQL databases such as Mongo DB with a frontend framrwork such as Materialize. The application is a simple Note Manager that allows registered users to manage notes and allows multi user-functinality. This application is developed using Meteor 1.6.1 and Materialize-CSS 0.97.6 version.

## Installation

#### Installing Git – the easy way

##### Installing Git on Windows

Download Git from Git for Windows- https://gitforwindows.org/ and install it.

##### Installing Git on Mac

Copy & paste the following into the terminal window and hit Return.

ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew doctor

You will be offered to install the Command Line Developer Tools from Apple. Confirm by clicking Install. After the installation finished, continue installing Homebrew by hitting Return again.

#### NodeJS
Download from this link: https://nodejs.org/en/download/ (Links to an external site.)Links to an external site.

Note: Please make sure you download the LTS version.

#### Meteor JS

##### Installing on Windows

First Install Chocolatey
        	Install with cmd.exe and Run the following command:
 
#### @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
 
          Run this command using an Administrator command prompt:
 
#### choco install meteor
 
 ##### Installing on Mac
 
Run the following command in your terminal to install the latest official Meteor release:
 
#### curl https://install.meteor.com/ | sh

## Getting Started

Move to the project folder and create a meteor project using the command:
 
#### meteor  create <projectname> 
 
The application runs on port 3000 by default. Run the project using the command
 
#### meteor
 
Install a frontend framework such as Materialize. Move to the project directory and use the command
 
#### meteor add materialize:materialize

or first clone the existing repository by using the command

#### git clone https://github.com/SrideviAkondi/meteor-js-workshop
#### git fetch origin Final
#### git checkout Final

Download all the required dependencies using the command

npm install

Run the application and start mongo server using 

#### meteor 

#### meteror mongo 







