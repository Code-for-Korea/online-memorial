require "administrate/base_dashboard"

class StatDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    id: Field::Number,
    year: Field::Number,
    death: Field::Number,
    injury: Field::Number,
    week_0: Field::Number,
    week_1: Field::Number,
    week_2: Field::Number,
    week_3: Field::Number,
    week_4: Field::Number,
    week_5: Field::Number,
    week_6: Field::Number,
    hour_0: Field::Number,
    hour_1: Field::Number,
    hour_2: Field::Number,
    hour_3: Field::Number,
    hour_4: Field::Number,
    hour_5: Field::Number,
    hour_6: Field::Number,
    hour_7: Field::Number,
    hour_8: Field::Number,
    hour_9: Field::Number,
    hour_10: Field::Number,
    hour_11: Field::Number,
    hour_12: Field::Number,
    hour_13: Field::Number,
    hour_15: Field::Number,
    hour_16: Field::Number,
    hour_17: Field::Number,
    hour_18: Field::Number,
    hour_19: Field::Number,
    hour_20: Field::Number,
    hour_21: Field::Number,
    hour_22: Field::Number,
    hour_23: Field::Number,
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = %i[
    id
    year
    death
    injury
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = %i[
    id
    year
    death
    injury
    week_0
    week_1
    week_2
    week_3
    week_4
    week_5
    week_6
    hour_0
    hour_1
    hour_2
    hour_3
    hour_4
    hour_5
    hour_6
    hour_7
    hour_8
    hour_9
    hour_10
    hour_11
    hour_12
    hour_13
    hour_15
    hour_16
    hour_17
    hour_18
    hour_19
    hour_20
    hour_21
    hour_22
    hour_23
    created_at
    updated_at
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = %i[
    year
    death
    injury
    week_0
    week_1
    week_2
    week_3
    week_4
    week_5
    week_6
    hour_0
    hour_1
    hour_2
    hour_3
    hour_4
    hour_5
    hour_6
    hour_7
    hour_8
    hour_9
    hour_10
    hour_11
    hour_12
    hour_13
    hour_15
    hour_16
    hour_17
    hour_18
    hour_19
    hour_20
    hour_21
    hour_22
    hour_23
  ].freeze

  # COLLECTION_FILTERS
  # a hash that defines filters that can be used while searching via the search
  # field of the dashboard.
  #
  # For example to add an option to search for open resources by typing "open:"
  # in the search field:
  #
  #   COLLECTION_FILTERS = {
  #     open: ->(resources) { resources.where(open: true) }
  #   }.freeze
  COLLECTION_FILTERS = {}.freeze

  # Overwrite this method to customize how stats are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(stat)
  #   "Stat ##{stat.id}"
  # end
end
