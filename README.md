# BARONS CLAW
This is barons algorithm to create a unique encoding schema.

## Turn Into A Baron Number
If you want to turn a normal character to a number in barons schema, then do that:
- Find the ASCII value of character and add __SALT,19 and 65__ it.
- Then if the character is a capital letter add 32, else subtract 32
- Its your new Baron Value

## Turn Into A ASCII Number
- Get the number and check whether it's bigger than 184 or not
- If its bigger subtract 32, else add 32. It will change and normalize the places of capital and regular letters.
- Then subtract __SALT, 19 and 65__ from the number you get and check what's the character placeholder of it in ASCII
