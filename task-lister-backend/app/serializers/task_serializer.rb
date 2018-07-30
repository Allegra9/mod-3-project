class TaskSerializer < ActiveModel::Serializer
  attributes :id, :description, :priority, :to_be_completed_by, :status, :list_id
end
