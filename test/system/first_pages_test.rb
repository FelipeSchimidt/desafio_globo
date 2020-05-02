require "application_system_test_case"

class FirstPagesTest < ApplicationSystemTestCase
  setup do
    @first_page = first_pages(:one)
  end

  test "visiting the index" do
    visit first_pages_url
    assert_selector "h1", text: "First Pages"
  end

  test "creating a First page" do
    visit first_pages_url
    click_on "New First Page"

    click_on "Create First page"

    assert_text "First page was successfully created"
    click_on "Back"
  end

  test "updating a First page" do
    visit first_pages_url
    click_on "Edit", match: :first

    click_on "Update First page"

    assert_text "First page was successfully updated"
    click_on "Back"
  end

  test "destroying a First page" do
    visit first_pages_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "First page was successfully destroyed"
  end
end
