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
end
