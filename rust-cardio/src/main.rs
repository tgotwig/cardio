fn main() {
    println!("Hello, world!");
}

mod tests {
    use std::collections::HashMap;

    #[test] // Topic: Reverse string
    fn should_reserve_string() {
        let rev_str = |str: &str| str.chars().rev().collect::<String>();

        assert_eq!(rev_str("disney"), "yensid");
    }

    #[test] // Topic: Is palindrome
    fn should_be_palindrome() {
        let is_palindrome = |str: &str| str.chars().rev().collect::<String>() == str;

        assert_eq!(is_palindrome("bob"), true);
        assert_eq!(is_palindrome("racecar"), true);
        assert_eq!(is_palindrome("hello"), false);
    }

    #[test] // Topic: Reverse int
    fn should_reverse_int() {
        let rev_int = |int: i32| {
            int.to_string()
                .chars()
                .rev()
                .collect::<String>()
                .parse::<i32>()
                .unwrap()
        };

        assert_eq!(rev_int(123), 321);
    }

    #[test] // Topic: Capitalize letters
    fn should_capitalize_letters() {
        let str_cap = |s: &str| format!("{}{}", &s[..1].to_string().to_uppercase(), &s[1..]);
        let capitalize_letters = |str: &str| {
            str.split_inclusive(" ")
                .map(|f| str_cap(f))
                .collect::<String>()
        };

        assert_eq!(capitalize_letters("i love rust"), "I Love Rust");
    }

    #[test] // Topic: Max character
    fn should_get_max_character() {
        let max_char = |str: &str| {
            let mut map: HashMap<char, i32> = HashMap::new();

            for char in str.chars() {
                if !map.contains_key(&char) {
                    map.insert(char, 0);
                } else {
                    map.insert(char, map.get(&char).unwrap() + 1);
                }
            }

            let mut max = 0;
            let mut char: char = str.chars().nth(0).unwrap();

            for (key, value) in map.into_iter() {
                max = if value > max {
                    char = key;
                    value
                } else {
                    max
                }
            }
            return char;
        };

        assert_eq!(max_char("javascript"), 'a');
    }

    #[test] // Topic: Fizz buzz
    fn should_do_fizz_buzz() {
        let fizz_buzz = |int: i32| {
            let mut output = String::new();

            if int % 3 == 0 {
                output.push_str("fizz");
            }
            if int % 5 == 0 {
                output.push_str("buzz");
            }

            output
        };

        assert_eq!(fizz_buzz(3), "fizz");
        assert_eq!(fizz_buzz(15), "fizzbuzz");
    }
}
