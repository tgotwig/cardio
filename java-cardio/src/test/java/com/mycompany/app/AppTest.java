package com.mycompany.app;

import static org.junit.Assert.assertEquals;
import java.util.stream.IntStream;
import org.junit.Test;

public class AppTest 
{
    public static String revStr(String string) {
      return new StringBuilder(string).reverse().toString();
    }
    @Test
    public void shouldReverseString()
    {
      assertEquals("yensid", revStr("disney"));
    }

    // ----

    public static Boolean isPalindrome(String text) {
      String temp  = text.replaceAll("\\s+", "").toLowerCase();
      return IntStream.range(0, temp.length()/2)
        .allMatch(i -> temp.charAt(i) == temp.charAt(temp.length() - i - 1));
    }
    @Test
    public void shouldValidatePalindrome()
    {
      assertEquals(true, isPalindrome("abcba"));
      assertEquals(true, isPalindrome("ab cba"));
      assertEquals(false, isPalindrome("abc"));
    }
}
