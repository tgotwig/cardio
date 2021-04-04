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
}
