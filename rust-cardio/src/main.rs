fn main() {
  println!("Hello, world!");
}

#[cfg(test)]
mod tests {

  #[test]
  fn should_reserve_string() {
    let rev_str = |str: &str| str.chars().rev().collect::<String>();

    assert_eq!(rev_str("disney"), "yensid");
  }

  #[test]
  fn should_be_palindrome() {
    let is_palindrome = |str: &str| str.chars().rev().collect::<String>() == str;

    assert_eq!(is_palindrome("bob"), true);
    assert_eq!(is_palindrome("racecar"), true);
    assert_eq!(is_palindrome("hello"), false);
  }
}
