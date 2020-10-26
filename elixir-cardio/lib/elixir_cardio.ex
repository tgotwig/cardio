defmodule ElixirCardio do
  @moduledoc """
  Documentation for `ElixirCardio`.
  """

  @doc """
  Hello world.

  ## Examples

      iex> ElixirCardio.hello()
      :world

  """
  def hello do
    :world
  end

  @doc """
  Reverses a String.

  ## Examples

      iex> ElixirCardio.rev_str("disney")
      "yensid"
  """
  def rev_str(text) when is_binary(text) do
    text
    |> String.reverse()
  end

  @doc """
  Checks for palindrome.

  ## Examples

      iex> ElixirCardio.is_palindrome("disney")
      false

      iex> ElixirCardio.is_palindrome("did")
      true

  """
  def is_palindrome(word) do
    word
    |> String.to_charlist()
    |> Enum.with_index()
    |> Enum.map(fn {_e, idx} ->
      binary_part(word, idx, 1) ==
        binary_part(word, String.length(word) - 1 - idx, 1)
    end)
    |> Enum.member?(false)
    |> Kernel.not()
  end
end
