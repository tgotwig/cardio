package app;

import static org.junit.Assert.assertEquals;

import java.util.Arrays;
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
}
