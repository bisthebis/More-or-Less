import Data.Char
import System.Random

--RPN
evaluateRPN :: String -> Integer
evaluateRPN = head . foldl process [] . words
    where 
        process (x:y:ys) "+" = (x+y):ys
        process (x:y:ys) "*" = (x*y):ys
        process (x:y:ys) "-" = (y-x):ys
        process (x:y:ys) "/" = (div y x):ys
        process stack number = read number : stack
        

readInt :: String -> Int
readInt = read

playMoreOrLess :: Int -> Int -> IO()
playMoreOrLess answer count = do
    putStrLn "Give a number :"
    guess <- fmap readInt getLine
    if (guess == answer) then putStrLn $ "Victory in " ++ (show count) ++ " guesses !"
        else do
            putStrLn $ if (guess > answer) then "Too big" else "Too small"
            playMoreOrLess answer (count + 1)

-- Plus ou Moins
main = do
   number <- randomRIO (1, 100)
   playMoreOrLess number 0