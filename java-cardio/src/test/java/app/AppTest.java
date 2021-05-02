package app;

import static org.junit.Assert.assertEquals;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.Map.Entry;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import org.junit.Test;

public class AppTest 
{
  public static String revStr(String string) {
    return new StringBuilder(string).reverse().toString();
  }
  @Test
  public void shouldReverseString() {
    assertEquals(revStr("disney"), "yensid");
  }

  // ----

  public static Boolean isPalindrome(String text) {
    String temp  = text.replaceAll("\\s+", "").toLowerCase();
    return IntStream.range(0, temp.length()/2)
      .allMatch(i -> temp.charAt(i) == temp.charAt(temp.length() - i - 1));
  }
  @Test
  public void shouldBePalindrome() {
    assertEquals(isPalindrome("abcba"), true);
    assertEquals(isPalindrome("ab cba"), true);
    assertEquals(isPalindrome("abc"), false);
  }

  // ----

  public static int revInt(int number) {
    return Integer.parseInt(
      new StringBuilder(Integer.toString(number))
      .reverse().toString());
  }
  @Test
  public void shouldReverseInt() {
    assertEquals(revInt(123), 321);
  }

  // ----

  public static String capitalizeLetters(String text) {
    return Arrays.stream(text.split("\\s+"))
      .map(word -> word.substring(0, 1).toUpperCase() + word.substring(1))
      .collect(Collectors.joining(" "));
  }
  @Test
  public void shouldCapitalizeLetters() {
    assertEquals(capitalizeLetters("ab cd"), "Ab Cd");
  }

  // ----

  public static int maxCharacter(String string) {
    Map<Character, Integer> map = new HashMap<Character, Integer>();
    for (char c : string.toCharArray()) {
      if (!map.containsKey(c)) {
        map.put(c, 1);
      } else {
        map.put(c, map.get(c) + 1);
      }
    }

    int max = Integer.MIN_VALUE;
    Set<Map.Entry<Character,Integer>> entries = map.entrySet();
    for (Entry<Character,Integer> entry : entries) {
      if (entry.getValue()>max) {
        max=entry.getValue();
      }
    }
    return max;
  }
  @Test
  public void shouldGetMaxCharacter() {
    assertEquals(maxCharacter("java"), 2);
  }
}
