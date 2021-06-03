fn main() {
    println!("Hello, world!");
}

mod tests {

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
}
