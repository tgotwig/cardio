package com.mycompany.app;

import java.util.stream.IntStream;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );
    }

    public static String revStr(String string) {
      return new StringBuilder(string).reverse().toString();
    }

    public static Boolean isPalindrome(String text) {
      String temp  = text.replaceAll("\\s+", "").toLowerCase();
      return IntStream.range(0, temp.length()/2)
        .allMatch(i -> temp.charAt(i) == temp.charAt(temp.length() - i - 1));
    }
}
