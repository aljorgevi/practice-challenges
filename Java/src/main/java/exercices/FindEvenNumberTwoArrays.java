package exercices;

import java.util.Arrays;
import java.util.function.IntPredicate;
import java.util.stream.IntStream;
import java.util.stream.Stream;

/*
 *   Find the even numbers in two arrays and return a new array.
 * */

public class FindEvenNumberTwoArrays {

  public static int[] findEvenNum(int[] arr1, int[] arr2) {
    IntPredicate intPredicate = x -> x % 2 == 0;

    return Stream
      .of(arr1, arr2)
      .flatMapToInt(Arrays::stream)
      .filter(intPredicate)
      .toArray();
  }

  public static void main(String[] args) {
    int[] arr1 = { -9, 3, 2, -8, 12, -16 };
    int[] arr2 = { 0, -3, -8, -35, 40, 20, 7 };

    int[] result = findEvenNum(arr1, arr2);
    System.out.println(Arrays.toString(result));
  }
}
