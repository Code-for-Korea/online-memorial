require 'swagger_helper'

RSpec.describe 'stats', type: :request do

  path '/stats/year/{year}' do
    # You'll want to customize the parameter types...
    parameter name: 'year', in: :path, type: :string, description: 'year'

    get('year stat') do
      response(200, 'successful') do
        let(:year) { '123' }

        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!
      end
    end
  end
end
