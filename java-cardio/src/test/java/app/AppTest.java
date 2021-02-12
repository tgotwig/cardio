package app;

import static org.junit.Assert.assertEquals;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.Map.Entry;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import org.junit.Test;

public class AppTest 
{
  @Test
  public void shouldReverseString() {
    Function<String, String> revStr = 
      str -> new StringBuilder(str).reverse().toString();

    assertEquals(revStr.apply("disney"), "yensid");
  }

  @Test
  public void shouldBePalindrome() {
    Function<String, Boolean> isPalindrome = str -> {
      String temp  = str.replaceAll("\\s+", "").toLowerCase();
      return IntStream.range(0, temp.length()/2)
        .allMatch(i -> temp.charAt(i) == temp.charAt(temp.length() - i - 1));
    };

    assertEquals(isPalindrome.apply("abcba"), true);
    assertEquals(isPalindrome.apply("ab cba"), true);
    assertEquals(isPalindrome.apply("abc"), false);
  }

  @Test
  public void shouldReverseInt() {
    Function<Integer, Integer> revInt = number -> Integer.parseInt(
      new StringBuilder(Integer.toString(number))
      .reverse().toString()
    );

    assertEquals(revInt.apply(Integer.valueOf(123)), Integer.valueOf(321));
  }

  @Test
  public void shouldCapitalizeLetters() {
    Function<String, String> capitalizeLetters = 
      str -> Arrays.stream(str.split("\\s+"))
        .map(word -> word.substring(0, 1).toUpperCase() + word.substring(1))
        .collect(Collectors.joining(" "));

    assertEquals(capitalizeLetters.apply("ab cd"), "Ab Cd");
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
