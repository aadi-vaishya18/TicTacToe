### Tic Tac Toe Project

#### Overview
This project is a browser-based **Tic Tac Toe** game designed for two players. It features a clean UI and dynamic gameplay. The game announces the winner, handles turns, and allows resetting the game board.

---

#### Files in the Project
1. `tic.html`:
   - This is the main HTML file.
   - It defines the structure of the game, including the navigation bar, game board, and reset button.
   - References:
     - **CSS**: `tac.css`
     - **JavaScript**: `toe.js`

2. **`tac.css`**:
   - Provides styling for the game.
   - Key Features:
     - Responsive design for smaller screens.
     - Hover effects on game boxes.
     - Aesthetic fonts and colors for better UX.

3. **`toe.js`**:
   - Contains the game logic.
   - Key Functionalities:
     - Handles player turns and changes the indicator (`X` and `O`).
     - Checks for winning combinations after each move.
     - Plays sound effects for turns (`ting.mp3`) and game over (`gameover.mp3`).
     - Resets the board when the "Reset" button is clicked.

4. **`ting.mp3`**:
   - A short sound effect played during each turn.

5. **`gameover.mp3`**:
   - A sound effect triggered when the game ends with a win.

---

#### How to Use
1. Open the `tic.html` file in any modern browser.
2. The game starts with `X` taking the first turn.
3. Players click on empty boxes to place their mark.
4. The game checks for winners after every turn.
5. Use the "Reset" button to restart the game.

---

#### Development Details
- **Technologies Used**: HTML, CSS, JavaScript
- **Responsive Design**: Supports smaller screens with flexible layout adjustments.

---

#### Future Enhancements
- Add AI for single-player mode.
- Implement animations for winning combinations.
- Allow customization of game colors and themes.
