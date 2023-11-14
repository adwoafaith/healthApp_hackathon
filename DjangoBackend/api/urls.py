from django.urls import path
from djoser.views import UserViewSet
from .views import ParentSignupView, TeacherSignupView, ParentLoginView, TeacherLoginView, ParentProfileSetupView

urlpatterns = [
    path('parent/signup/', ParentSignupView.as_view(), name='parent-signup'),
    path('teacher/signup/', TeacherSignupView.as_view(), name='teacher-signup'),
    path('api/parent/profile-setup/', ParentProfileSetupView.as_view(), name='parent-profile-setup'),
    path('parent/login/', ParentLoginView.as_view(), name='parent-login'),
    path('teacher/login/', TeacherLoginView.as_view(), name='teacher-login'),
    path('activate/<str:uid>/<str:token>/', UserViewSet.as_view({'post':'activation'}), name='activate-account'),
    # Add other URLs as needed
]
