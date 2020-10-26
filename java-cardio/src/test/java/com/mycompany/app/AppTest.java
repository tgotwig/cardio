package com.mycompany.app;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest 
{
    /**
     * Rigorous Test :-)
     */
    @Test
    public void shouldReverseString()
    {
      assertEquals("yensid", App.revStr("disney"));
    }

    @Test
    public void shouldValidatePalindrome()
    {
      assertEquals(true, App.isPalindrome("abcba"));
      assertEquals(true, App.isPalindrome("ab cba"));
      assertEquals(false, App.isPalindrome("abc"));
    }
}
